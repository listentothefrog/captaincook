import React, { useEffect, useState } from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  useLocation,
} from "react-router-dom";
import { auth } from "./firebase/firebase";
import routes from "./firebase/routes";
import AuthRoute from "./components/AuthRoute";
import SpinnerComponent from "./components/Spinner";
import HeaderComponent from "./components/Header";

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.info("User detected.");
      } else {
        console.info("No user detected");
      }

      setLoading(false);
    });
  }, []);

  if (loading)
    return <SpinnerComponent message={`Loading ${location.pathname}...`} />;

  return (
    <div>
      <div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(routeProps: RouteComponentProps<any>) => {
                if (route.protected)
                  return (
                    <AuthRoute>
                      <route.component {...routeProps} />
                    </AuthRoute>
                  );

                return (
                  <>
                    <HeaderComponent />
                    <route.component {...routeProps} />
                  </>
                );
              }}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default App;

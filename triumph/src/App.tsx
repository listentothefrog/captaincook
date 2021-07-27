import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { auth } from "./firebase/firebase";
import routes from "./firebase/route";
import AuthRoute from "./modules/auth/AuthRoute";

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);

  // Monitor and Update user state.
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User detected.");
      } else {
        console.log("No user detected");
      }
      setLoading(false);
    });
  }, []);
  if (loading) return <div>Loding...</div>;

  return (
    <Router>
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
                <div>
                  <route.component {...routeProps} />
                </div>
              );
            }}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;

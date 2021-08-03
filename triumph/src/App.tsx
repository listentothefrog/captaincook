import React, { useEffect, useState } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { Spinner } from "@chakra-ui/react";
import routes from "./firebase/routes";
import AuthRoute from "./components/AuthRoute";

export interface IApplicationProps {}
const App: React.FC<IApplicationProps> = (props) => {
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
    return (
      <Spinner
        thickness="3px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#6c9e4f"
        size="md"
      />
    );

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

                return <route.component {...routeProps} />;
              }}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default App;

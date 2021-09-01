import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";

const RouteHandler = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return (
            <Route exact path={route.path}>
              <route.layout>
                <route.component />
              </route.layout>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default RouteHandler;

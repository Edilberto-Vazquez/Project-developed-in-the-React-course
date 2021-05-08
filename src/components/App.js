// import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import BadgeHome from "../pages/BadgeHome";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/Home" component={BadgeHome} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />

          {/* primera forma 404 notfound*/}
          <Route component={NotFound} />

          {/* segunda forma 404 notfound
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

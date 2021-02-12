import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { RecipeOTD } from "./containers/RecipeOTD";
import { RecipeCalendar } from "./containers/RecipeCalendar";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path="/recipecalendar" component={RecipeCalendar} />
            <Route path="/" exact component={RecipeOTD} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;

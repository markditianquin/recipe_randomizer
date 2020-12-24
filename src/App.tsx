import React from "react";
import styles from "./App.module.scss";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { RecipeOTD } from "./containers/RecipeOTD";
import { RecipeCalendar } from "./containers/RecipeCalendar";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/recipecalendar" component={RecipeCalendar} />
          <Route path="/" exact component={RecipeOTD} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

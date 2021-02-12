import React from "react";
import classes from "./Toolbar.module.scss";

export const Toolbar: React.FC = () => (
  <header className={classes.Toolbar}>
    <div>logo</div>
    <nav>
      <div>home,some</div>
    </nav>
  </header>
);

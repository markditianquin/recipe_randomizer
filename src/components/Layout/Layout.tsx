import React from "react";
import { Toolbar } from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.scss";

export const Layout: React.FC = (props) => (
  <>
    <Toolbar></Toolbar>
    <main className={classes.layout}>{props.children}</main>
  </>
);

import React from "react";
import Join from "../src/Join";
import Login from "../src/Login";

const routes = [
  { name: "Join", path: "/", exact: true, main: () => <Join /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> },
];

export default routes;
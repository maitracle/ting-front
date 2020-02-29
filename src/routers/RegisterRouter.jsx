import React from "react";
import { Route } from "react-router-dom";

import RegisterPage from "src/pages/RegisterPage";

export default () => {
  return (
    <>
      <Route path="/register" exact component={RegisterPage} />
    </>
  );
};

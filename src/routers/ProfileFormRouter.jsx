import React from "react";
import { Route } from "react-router-dom";

import ProfileFormPage from "src/pages/ProfileFormPage";

export default () => {
  return (
    <>
      <Route path="/profile-form" exact component={ProfileFormPage} />
    </>
  );
};

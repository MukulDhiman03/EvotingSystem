import React from "react";
import "./ShowError.css";
import { ErrorMessage } from "formik";

const ShowError = ({ name }) => {
  return (
    <div id="show-msg">
      <ErrorMessage name={name} />
    </div>
  );
};

export default ShowError;

import React from "react";
import { Formik, Form, Field } from "formik";
import ShowError from "./ShowError";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("Invalid email format!")
    .required("Email is required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Must contains 8 characters,1 upper case , 1 lower case 1 special character"
    )
    .required("Password is required"),
  phonenumber: yup
    .number()
    .min(1000000000, "Not valid phone number!")
    .max(9999999999, "Not valid phone number!")
    .required("P.no is required!"),
  dob: yup.date().required("dob is required!"),
  gender: yup.string().required("Gender is required!"),
});
const Register = () => {
  return (
    <>
      <h1 className="text-center">Register Yourself To Vote </h1>
      <div className="container">
        <div className="row">
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              name: "",
              email: "",
              password: "",
              phonenumber: "",
              dob: "",
              gender: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <div className="form-control">
              <Form>
                <div className="form-control mt-2">
                  <label htmlFor="" className="form-label">
                    👨 Name:
                  </label>
                  <br />
                  <Field name="name" type="text" size="50" />
                  <ShowError name="name" />
                  <br />
                </div>
                <div className="form-control mt-2">
                  <label htmlFor="" className="form-label">
                    📧 Email:
                  </label>
                  <br />
                  <Field name="email" type="email" size="50" />
                  <ShowError name="email" />
                  <br />
                </div>
                <div className="form-control mt-2">
                  <label htmlFor="" className="form-label">
                    🔑 Password:
                  </label>
                  <br />
                  <Field name="password" type="password" size="25" />
                  <ShowError name="password" />
                  <br />
                </div>
                <div className="form-control mt-2">
                  <label htmlFor="" className="form-label">
                    📱 Phone Number:
                  </label>
                  <br />
                  <Field name="phonenumber" type="tel" size="25" />
                  <ShowError name="phonenumber" />
                  <br />
                </div>
                <div className="form-control mt-2">
                  <label htmlFor="" className="form-label">
                    📅 DOB:
                  </label>
                  <br />
                  <Field name="dob" type="date" />
                  <ShowError name="dob" />
                  <br />
                </div>
                <div className="form-control mt-2">
                  <label htmlFor="" className="form-check-label">
                    Male:
                  </label>
                  <Field
                    name="gender"
                    value="Male"
                    type="radio"
                    className="form-check-input"
                  />
                  <br />
                  <label htmlFor="" className="form-check-label">
                    Female:
                  </label>
                  <Field
                    name="gender"
                    value="Female"
                    type="radio"
                    className="form-check-input"
                  />
                  <br />
                  <label htmlFor="" className="form-check-label">
                    Other:
                  </label>
                  <Field
                    name="gender"
                    value="Other"
                    type="radio"
                    className="form-check-input"
                  />
                  <br />
                  <ShowError name="gender" />
                  <br />
                </div>
                <button className="btn btn-primary mb-5 mt-2" type="submit">
                  Submit
                </button>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;

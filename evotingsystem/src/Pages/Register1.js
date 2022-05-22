import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div classNameName="container">
      <div className="row ">
        <div className="col-10 m-lg-5">
          <form className="p-2">
            <h1>User Register</h1>
            <div className="row mb-3">
              <div className="col">
                <label for="firstName" className="form-label">
                  👨 First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  aria-label="First name"
                  required
                />
              </div>
              <div className="col">
                <label for="lastName" className="form-label">
                  👨Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  aria-label="Last name"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                📧 Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label for="inputPassword5" className="form-label">
                🔑 Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
                required
              />
            </div>
            <div className="mb-3">
              <label for="formphone" className="form-label">
                📱 Phone Number
              </label>
              <input
                className="form-control form-control-sm"
                id="formphone"
                type="tel"
                required
              />
            </div>
            <div className="mb-3">
              <label for="formdob" className="form-label">
                📅 DOB
              </label>
              <input
                className="form-control form-control-sm"
                id="formdob"
                type="date"
                required
              />
            </div>
            <div className="mb-3">
              <label for="formFileSm" className="form-label">
                Upload Image
              </label>
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file"
                required
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Other
              </label>
            </div>
            <button type="submit" className="btn btn-primary mb-5">
              SignUp
            </button>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Register;

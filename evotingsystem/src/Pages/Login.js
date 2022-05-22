import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mt-5" id="login-container">
      <div className="row">
        <form onSubmit={clickHandler} className="m-4 p-3">
          <h1>Login</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="inputPassword5" class="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
            />
          </div>
          <button type="submit" class="btn btn-primary mb-2">
            Submit
          </button>
          <p>
            New User ?
            <NavLink className="nav-link active " to="/register">
              Click Here To Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

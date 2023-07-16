import Profile from "./Profile";
import { useState } from "react";
import style from "./Login.module.css";
import App from "./App";
const Login = ({
  password,
  errorPassword,
  email,
  errorEmail,
  vEmail,
  vPassword,
  isSubmit,
  isValidEmail,
  isValidPassword,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="">
          <label htmlFor="email">
            Email :<br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onClick={() => {
                document.getElementsByClassName("para")[0].style.display =
                  "block";
                //.style.display = "block";
              }}
            />
            {console.log(errorEmail)}
            <p className="para">{errorEmail}</p>
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password : <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onClick={() => {
                document.getElementsByClassName("para")[1].style.display =
                  "block";
                //.style.display = "block";
              }}
            />
            <p className="para">{errorPassword}</p>
          </label>
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

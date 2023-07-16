import { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import "./styles.css";

export default function App() {
  const initialValues = {
    email: "",
    password: "",
    errorEmail: "Please enter email address",
    errorPassword: "Please enter password ",
    validEmail: false,
    validPassword: false,
    isSubmit: false
  };

  const [data, setData] = useState(initialValues);

  function isValidEmail(email) {
    if (email === "") {
      setData({ ...data, errorEmail: "Please enter email address" });
    } else {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
      if (!emailRegex) {
        setData({
          ...data,
          errorEmail: "Enter a valid Email address"
        });
      } else {
        setData({ ...data, valEmail: true, errorEmail: null });
      }
    }
    setData({ ...data, email: email });
  }

  function isvaildPassword(password) {
    if (password === "")
      setData({ ...data, errorPassword: "Please enter a password" });
    else if (password) {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,18}$/.test(
        password
      );
      if (!passwordRegex) {
        setData({
          ...data,
          errorPassword: "Enter a valid Password"
        });
      } else {
        setData({ ...data, valPassword: true, errorPassword: null });
      }
    }
    setData({ ...data, password: password });
  }

  const handleChange = (event) => {
    console.log("handle change called");
    console.log(event.target.name);
    event.target.name === "email"
      ? isValidEmail(event.target.value)
      : isvaildPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    data.validEmail && data.validPassword
      ? setData({ ...data, isSubmit: true })
      : setData({ ...data, isSubmit: false });
  };

  console.log(data);
  return !data.isSubmit ? (
    <Login
      password={data.password}
      errorPassword={data.errorPassword}
      email={data.email}
      errorEmail={data.errorEmail}
      vEmail={data.validEmail}
      vPassword={data.validPassword}
      isSubmit={data.isSubmit}
      isValidEmail={isValidEmail}
      isvaildPassword={isvaildPassword}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  ) : (
    <Profile email={data.email} password={data.password} />
  );
}

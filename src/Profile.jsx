import "./styles.css";
import Login from "./Login";
import { useState } from "react";
import App from "./App";
const Profile = ({ email, password }) => {
  const [isLogOut, setIsLogOut] = useState(false);
  if (isLogOut) {
    return <App />;
  }
  return (
    <div className="container">
      <h1>Hi ,Welcome to your profile page</h1>
      <button
        type="button"
        onClick={() => {
          setIsLogOut(true);
        }}
      >
        SignOut
      </button>
      <div className="inside-container">
        <h3>Email : {email}</h3>
        <h3>password : {password}</h3>
      </div>
    </div>
  );
};

export default Profile;

import React, { useContext, useState } from "react";
import { AuthContext } from "../src/index";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../src/firebase.config";

const app = initializeApp(firebaseConfig);


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    console.log(Auth);
    Auth.setLoggedIn(true);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="email"
        />
        <input          
          onChange={e => setPassword(e.target.value)}
          name="password"
          type="password"
          value={password}
          placeholder="password"
        />
        <hr />
        <button className="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login with Google
        </button>
        <button type="submit">Login</button>
        <span>{error}</span>
      </form>
    </div>
  );

};

export default Login;
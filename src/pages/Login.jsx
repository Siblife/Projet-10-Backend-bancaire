import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {
const [username, setUsername] = useState([""])
const [password, setPassword] = useState([""]);

function submit () {
  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify({ email: username, password: password }),
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
}


  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="src/images/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                type="text"
                id="username"
              />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>

            <button onClick={submit} className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
}

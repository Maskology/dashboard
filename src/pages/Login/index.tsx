import { useState } from "react";
import type { FormEvent } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
    }
  }

  return (
    <div className="container h-100 d-flex align-item-center justify-content-center">
      <main className="col form-signin text-center m-auto">
        <form onSubmit={(e) => handleLogin(e)}>
          <img
            className="mb-4"
            src="public/logo-dashboard.png"
            alt=""
            width="195"
            height="72"
          />
          <h1 className="h4 mt-5 mb-4 fw-normal">Login Form</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 mt-4 btn btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022, Denpasar, Bali</p>
        </form>
      </main>
    </div>
  );
}

import { useState } from "react";
import type { FormEvent } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email && password && name && contact) {
      if (password === confirmPassword) {
        console.log(name, contact, email, password);
        navigate("/login");
      } else {
        alert("Password not match");
      }
    }
  }

  return (
    <div className="container h-100 d-flex align-item-center justify-content-center">
      <main className="col form-register text-center m-auto">
        <form onSubmit={(e) => handleRegister(e)}>
          <img
            className="mb-4"
            src="/logo-dashboard.png"
            alt=""
            width="195"
            height="72"
          />
          <h1 className="h4 mt-5 mb-4 fw-normal">Register Form</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Store"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Store name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="+620000000"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label htmlFor="floatingInput">Phone number</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>
          <button className="w-100 mt-5 btn btn-primary" type="submit">
            Register
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022, Denpasar, Bali</p>
        </form>
      </main>
    </div>
  );
}

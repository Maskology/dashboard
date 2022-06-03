import "./register.css";

export default function Register() {
  return (
    <div className="container h-100 d-flex align-item-center justify-content-center">
      <main className="col form-register text-center m-auto">
        <form>
          <img
            className="mb-4"
            src="public/logo.jpg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-5 fw-normal">Register Form</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Store name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Phone number</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
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

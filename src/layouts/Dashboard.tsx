import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="dashboard-layout">
      <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap py-2 pe-4 shadow">
        <a
          className="bg-light text-center col-md-3 col-lg-2 me-0 px-3 fs-6 border-none"
          href="#"
        >
          <img
            className="p-1"
            src="/logo-dashboard.png"
            alt=""
            width="100"
            height="43"
          />
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="btn btn-danger text-white nav-link px-3" href="#">
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div className="container-fluid h-100">
        <div className="row h-100">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3 px-4">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span className="mt-4 mb-4">Menu</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span
                    data-feather="plus-circle"
                    className="align-text-bottom"
                  ></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a
                    className="fs-5 nav-link mb-2 active"
                    aria-current="page"
                    href="#"
                  >
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="fs-5 nav-link mb-2" href="#">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Product
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="fs-5 nav-link mb-2" href="#">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    About
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>

          <main className="h-100 col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

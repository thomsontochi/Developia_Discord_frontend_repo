import React, { useState } from "react";
import { Link } from "react-router-dom";

const VendorLoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    storeId: "", // Additional field for vendors
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vendor Login submitted", credentials);
  };

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-3">
                <div className="text-center mb-4">
                  <h3 className="fw-bold mb-2">Vendor Login</h3>
                  <p className="text-muted">Access your vendor dashboard</p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-3"
                >
                  {/* Store ID Input */}
                  <div className="">
                    <label className="form-label small fw-medium text-dark fw-bold">
                      Store ID
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text border-end-0">
                        <i className="fas fa-store text-primary opacity-50"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        name="storeId"
                        value={credentials.storeId}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="">
                    <label className="form-label small fw-medium text-dark fw-bold">
                      Email Address
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text border-end-0">
                        <i className="fas fa-envelope text-primary opacity-50"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control border-start-0"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="">
                    <label className="form-label small fw-medium text-dark fw-bold">
                      Password
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text border-end-0">
                        <i className="fas fa-lock text-primary opacity-50"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control border-start-0"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg mt-3"
                  >
                    Sign In as Vendor
                  </button>

                  <div className="text-center">
                    <p className="mb-0 text-muted small">
                      Don't have a vendor account?{" "}
                      <Link
                        to="/auth/vendor/register"
                        className="text-decoration-none fw-medium text-primary fw-bold"
                      >
                        Register as Vendor
                      </Link>
                    </p>
                    <p className="small text-muted mt-2">
                      For customer accounts{" "}
                      <Link
                        to="/auth/login"
                        className="text-decoration-none fw-medium text-primary fw-bold"
                      >
                        login here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLoginForm;

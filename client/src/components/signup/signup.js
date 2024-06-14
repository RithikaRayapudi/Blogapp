import "./signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [err, setErr] = useState("");
  const [state, setState] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  async function onSignUpFormSubmit(userObj) {
    console.log(userObj);
    const endpoint = userObj.userType === "author"
      ? "http://localhost:5000/author-api/author"
      : "http://localhost:5000/user-api/user";
    try {
      let res = await axios.post(endpoint, userObj);
      console.log(res);
      if (res.status === 201) {
        setState(true);
        setSignupSuccess(true);
        setErr("");
        navigate("/signin");
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      setErr("Registration failed. Please try again.");
    }
  }

  return (
    <div className="signup-container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-12">
          <div className="card shadow form-card">
            <div className="card-title text-center border-bottom">
              {signupSuccess ? (
                <div>
                  <p className="lead fs-3 text-center display-4 text-success">
                    User registration success
                  </p>
                  <p className="text-center fs-6 text-secondary">
                    Proceed to <Link to="/signin">Login</Link>
                  </p>
                  <p className="text-center fs-6 text-secondary">
                    Back to <Link to="/">Home</Link>
                  </p>
                </div>
              ) : (
                <h2 className="form-label">Signup</h2>
              )}
            </div>
            <div className="card-body">
              {err && (
                <p className="lead text-center text-danger">{err}</p>
              )}

              <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
                {/* Radio buttons */}
                <div className="mb-4">
                  <label
                    htmlFor="user"
                    className="form-check-label me-3"
                    style={{
                      fontSize: "1rem",
                      color: "#263238",
                    }}
                  >
                    Register as
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="author"
                      value="author"
                      {...register("userType", { required: true, disabled: state })}
                    />
                    <label
                      htmlFor="author"
                      className="form-check-label"
                      style={{ color: "var(--crimson)" }}
                    >
                      Author
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="user"
                      value="user"
                      {...register("userType", { required: true, disabled: state })}
                    />
                    <label
                      htmlFor="user"
                      className="form-check-label"
                      style={{ color: "var(--crimson)" }}
                    >
                      User
                    </label>
                  </div>
                  {errors.userType && (
                    <p className="text-danger">User type is required</p>
                  )}
                </div>
                {/* Username */}
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    {...register("username", { required: true, disabled: state })}
                  />
                  {errors.username && (
                    <p className="text-danger">Username is required</p>
                  )}
                </div>
                {/* Password */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    {...register("password", { required: true, disabled: state })}
                  />
                  {errors.password && (
                    <p className="text-danger">Password is required</p>
                  )}
                </div>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, disabled: state })}
                  />
                  {errors.email && (
                    <p className="text-danger">
                      {errors.email.type === 'pattern' ? 'Invalid email address' : 'Email is required'}
                    </p>
                  )}
                </div>
                {/* Submit Button */}
                <div className="text-end">
                  <button type="submit" className="btn" disabled={state}>
                    Register
                  </button>
                </div>
              </form>
              {/* Link to sign-in page for already registered users */}
              <div className="text-center mt-3">
                <p>
                  Already registered? <Link to="/signin">Sign in here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

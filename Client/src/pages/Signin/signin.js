import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";
import { URL } from "../../config";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigateTo = useNavigate();

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning("Please Enter email!...");
    } else if (password.length == 0) {
      toast.warning("Please Enter Password!...");
    } else {
      const body = {
        email,
        password,
      };
      console.log(body);
      const url = `${URL}/signIn`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          navigateTo("/home");
          toast.success("Wellcome the College Management!...");
        } else {
          toast.error("Invalid Username or Password");
        }
      });
    }
  };
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1 className="text-center">Login Page</h1>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">
                <i className="fas fa-envelope"></i>
                <b />
                <b />
                <b />
                Email address
              </label>
            </div>
            <div className="form-floating">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">
                <i className="fas fa-key"></i>
                <b />
                <b />
                <b />
                Password
              </label>
            </div>
            <br />
            <div className="d-grid gap-2">
              <div className="col-md-12 text-center">
                <button
                  onClick={signinUser}
                  className="btn btn-primary"
                  type="button"
                >
                  Login
                </button>
              </div>
              <div>
                Not Registered yet?<Link to="#">Signup here</Link>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const handleGoogleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Google Logged in Succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(form);
    signIn(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Loggedin Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("keya be" + error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn">
              <FaGoogle></FaGoogle> Sign In with Google
            </button>
            <h1>
              Do not have an account? please{" "}
              <NavLink to="/signup" className="underline">
                Registration
              </NavLink>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

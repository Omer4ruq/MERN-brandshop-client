import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import app from "../../firebase/firebase.config";
import { AuthContext } from "../providers/AuthProvider";
import app from "../firebase/firebase.config";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    if (password.length < 6) {
      setRegisterError("Pasword should be at least 6 characters or longer");
      // toast(registerError);
      return;
    } else if (!/[A_Z]/.test(password)) {
      setRegisterError("Password Must have An Upper Case Character");
      // toast(registerError);
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setRegisterError("Password Must have atleast one spacial Character");
      // toast(registerError);
      return;
    }
    setRegisterError("");
    setSuccess("");

    createUser(email, password, name, photo)
      .then((result) => {
        const user = result.user;
        console.log(result);
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
        setSuccess("User Created Succesfully");
        // toast.dark(success);
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        // toast.error(registerError);
      });

    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                    name="photo"
                  />
                </div>
              </div>{" "}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
                {/* <ToastContainer /> */}
              </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn">
              <FaGoogle></FaGoogle> Sign In with Google
            </button>
            <h1>
              All ready have an account? please{" "}
              <NavLink to="/signin" className="underline">
                Login
              </NavLink>{" "}
            </h1>
          </div>
        </div>
      </div>
      {registerError && <p className="text-white">{registerError}</p>}
      {success && <p className="text-white">{success}</p>}
    </div>
  );
};

export default SignUp;

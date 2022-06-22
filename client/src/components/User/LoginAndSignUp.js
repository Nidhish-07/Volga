import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginAndSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";

import { useAlert } from "react-alert";

import { clearErrors, login, signUp } from "../../actions/userAction";

const LoginAndSignUp = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const signUpTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  // const [profilePic, setProfilePic] = useState();
  // const [profilePicPreview, setProfilePicPreview] = useState("/logo192.png");

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword));
  };
  const signUpSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    // myForm.set("profilePic", profilePic);
    dispatch(signUp(myForm));
  };

  const registerDataChange = (e) => {
    // if (e.target.value === "profilePic") {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setProfilePicPreview(reader.result);
    //       setProfilePic(reader.result);
    //     }
    //   };

    //   reader.readAsDataURL(e.target.files[0]);
    // } else {
    setUser({ ...user, [e.target.name]: e.target.value });
    // }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/account");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      signUpTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }

    if (tab === "signUp") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      signUpTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="container w-[100vw] h-[100vh] max-w-[100%] flex justify-center items-center bg-slate-300 fixed top-0 left-0">
            <div className="box bg-white w-[25vw] h-[70vh] box-border overflow-hidden ">
              <div>
                <div className="toggle flex h-[3vmax] ">
                  <p onClick={(e) => switchTabs(e, "login")}>Login</p>
                  <p onClick={(e) => switchTabs(e, "signUp")}>SignUp</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form
                className="loginForm flex flex-col items-center m-auto p-[2vmax] justify-center h-[70%] transition-all duration-500"
                ref={loginTab}
                onSubmit={loginSubmit}
              >
                <div className="loginEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forgot Password</Link>
                <input
                  type="submit"
                  value="Login"
                  className="LoginBtn border-none bg-blue-600 text-white text-2xl w-[50%] p-[0.8vmax] cursor-pointer transition-all duration-500 border-r-4 outline-none shadow-md hover:bg-blue-900 mt-12"
                />
              </form>
              <form
                className="signUpForm flex flex-col items-center m-auto p-[2vmax] justify-center h-[70%] transition-all duration-500 -translate-x-full -translate-y-[100vmax]"
                ref={signUpTab}
                encType="multipart/form-data"
                onSubmit={signUpSubmit}
              >
                <div className="signUpName">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                {/* <div id="registerImage">
              <img src={profilePicPreview} alt="Profile Pic Preview" />
              <h2>Profile Picture</h2>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div> */}

                <input
                  type="submit"
                  value="SignUp"
                  className="signUpBtn border-none bg-blue-600 text-white text-2xl w-[50%] p-[0.8vmax] cursor-pointer transition-all duration-500 border-r-4 outline-none shadow-md hover:bg-blue-900 mt-12"
                  // disabled={loading:true:false}
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginAndSignUp;

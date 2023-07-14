import React, { useState } from "react";
import "./LoginModal.css";
import { RxCross2 } from "react-icons/rx";
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(true);
  const dispatch = useDispatch();

  const signup = async () => {
    const { data } = await supabase.auth.signUp({
      email,
      password,
    });
    // console.log(data, error);
    if (data.user) {
      console.log("Account created, please verify your email");
    }
  };

  const login = async () => {
    // console.log("calling");
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data, error);
    // alert(error.message);
    if (error) {
      alert(error?.message);
      return;
    }
    dispatch(setUser(data.user));
  };

  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="login-des">
              Get access to your Orders, WishList and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipkart's
            <span style={{ color: "blue" }}>Terms of use</span>
            <span style={{ color: "blue" }}> Privacy Policy</span>
          </p>

          {loginType ? (
            <button className="Login-btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="Login-btn" onClick={signup}>
              SignUp
            </button>
          )}
          {loginType ? (
            <p className="Login-signup" onClick={() => setLoginType(false)}>
              New to FlipKart? Create an Account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={()=>setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;

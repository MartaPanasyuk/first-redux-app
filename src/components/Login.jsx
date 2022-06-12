import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../components/features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Marta", age: 30, email: "marta@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LogOut
      </button>
    </div>
  );
}

export default Login;

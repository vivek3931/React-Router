import React, { useState, useContext } from "react";
import UserContext from "../../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white/75 p-3">
      <div className="w-[90%] flex-cols md:flex lg:flex shadow-2xl p-2 rounded-2xl ">
        <div className="w-full md:w-[50%] lg:w-[50%]">
          <img
            src="/public/img/login-bg.png"
            alt="bg-img"
            className="w-full h-full rounded"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-[50%] lg:w-[50%] px-3 p-2">
          <h1 className="text-3xl font-bold md:text-center lg:text-center mb-3">
            Login Page
          </h1>
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email here"
            className="py-3 w-full border rounded px-2 mb-5"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="password" className="mb-1">
            Password
          </label>
          <input
            min={8}
            type="password"
            placeholder="Enter your password here"
            className="py-3 w-full border rounded px-2"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="py-3 border rounded bg-amber-700 transition text-white font-bold hover:bg-amber-600 w-full mt-6 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

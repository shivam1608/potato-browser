import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  if (token) {
    navigate("/", { replace: true });
  }

  const handleLogin = (e) => {
    if (!input) {
      return;
    }
    setToken(input);
    localStorage.setItem("token", input);
  };

  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="flex flex-col w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-green-400 font-bold text-4xl">🥔 Potato Browser</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-[#121212] px-4 py-2 text-white outline-none w-72 my-4 rounded-md"
          type="text"
          placeholder="Enter your token to login!"
        />
        <button
          onClick={handleLogin}
          className="self-end my-4 w-fit transition-all duration-300 bg-green-400 text-black rounded-lg font-bold px-4 py-2 border hover:bg-black hover:text-green-400 border-green-400 disabled:opacity-80 disabled:cursor-wait"
        >
          Login
        </button>
      </div>
      <span className="text-white text-sm">
        Don't know how to get token?{" "}
        <Link to="/public-tokens" className="text-green-400 font-bold">
          click here
        </Link>
      </span>
    </div>
  );
};

export default Login;

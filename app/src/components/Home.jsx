import React, { useEffect, useState } from "react";
import CreateSession from "./CreateSession";
import SessionView from "./SessionView";
import { useNavigate } from "react-router-dom";

const Home = ({ token, setToken }) => {
  const [open, setOpen] = useState(false);
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  if (!token) {
    navigate("/login", { replace: true });
  }

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center items-center h-full w-full flex-col">
      <h1 className="font-bold text-green-400 text-3xl my-2">💻 SESSIONS</h1>
      <div className="flex items-center gap-2">
        <button
          onClick={(e) => setOpen(!open)}
          className="transition-all duration-300 bg-green-400 text-black rounded-lg font-bold px-4 py-2 my-2 border hover:bg-black hover:text-green-400 border-green-400"
        >
          {open ? "View all sessions" : "Create new session"}
        </button>
        <button
          onClick={(e) => {
            setToken(null);
            localStorage.clear();
          }}
          className="transition-all duration-300 bg-green-400 text-black rounded-lg font-bold px-4 py-2 my-2 border hover:bg-black hover:text-green-400 border-green-400"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-col w-full md:w-2/3 lg:w-1/2">
        {open ? (
          <CreateSession />
        ) : (
          <SessionView sessions={sessions} setSessions={setSessions} />
        )}
      </div>
    </div>
  );
};

export default Home;

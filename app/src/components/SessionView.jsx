import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IO } from "../api";
import toast from "react-hot-toast";

const SessionView = ({ sessions, setSessions }) => {
  const navigate = useNavigate();

  const openSession = (e) => {
    const sessionId = e.target.getAttribute("session");
    if (sessionId) {
      navigate(`/session/${sessionId}`);
    }
  };

  const deleteSession = (e) => {
    const sessionId = e.target.getAttribute("session");
    if (sessionId) {
      toast.promise(
        IO.delete(`/${sessionId}`),
        {
          loading: "Deleting Session",
          success: (session) => {
            setSessions((prev) =>
              prev.filter((v) => v != session.data.session_id)
            );
            return "Session Deleted";
          },
          error: "Failed to delete session",
        },
        {
          style: {
            background: "#121212",
            color: "rgb(74 222 128)",
          },
        }
      );
    }
  };

  useEffect(() => {
    IO.get("").then((res) => {
      setSessions(res.data.results.map((v) => v.id));
    });
  }, []);

  return (
    <div className="flex flex-col my-5 max-h-96 overflow-y-auto">
      {sessions.map((v, i) => {
        return (
          <div
            key={i}
            className="my-1 flex bg-[#121212] p-4 rounded-md items-center justify-between border border-green-400"
          >
            <div className="flex items-center w-full">
              <svg
                className="h-auto w-10"
                fill="#4ade80"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M0 0h192v192H0z" fill="none"></path>
                  <path d="M104.372 175.382c.815-.401 1.894-.589 3.064-.589 1.169 0 2.249.188 3.064.589a6.002 6.002 0 0 0 8.033-2.73 6.002 6.002 0 0 0-2.73-8.034c-2.236-1.102-5.157-1.825-8.367-1.825-3.21 0-6.131.723-8.367 1.825a6.003 6.003 0 0 0-2.731 8.034 6.003 6.003 0 0 0 8.034 2.73Zm-26.311-30.285c7.835-5.74 18.126-9.181 29.375-9.181 11.248 0 21.54 3.441 29.374 9.181a6.003 6.003 0 0 0 8.386-1.294 6.002 6.002 0 0 0-1.294-8.386c-9.733-7.131-22.491-11.501-36.466-11.501-13.976 0-26.733 4.37-36.467 11.501a6.003 6.003 0 0 0-1.294 8.386 6.003 6.003 0 0 0 8.386 1.294Zm-29.224-30.968c15.635-13.767 36.149-22.122 58.599-22.122 22.45 0 42.963 8.355 58.599 22.122a6.002 6.002 0 0 0 8.468-.539 6.002 6.002 0 0 0-.538-8.468c-17.752-15.63-41.041-25.115-66.529-25.115s-48.778 9.485-66.529 25.115a6.001 6.001 0 0 0-.538 8.468 6.002 6.002 0 0 0 8.468.539ZM41.144 16c-7.008 0-14.017 1.18-21.024 3.493A6 6 0 0 0 16 25.191c0 17.158.58 34.982 22.725 44.735a6.006 6.006 0 0 0 4.837 0c22.145-9.753 22.725-27.577 22.725-44.735a6 6 0 0 0-4.12-5.698C55.16 17.18 48.151 16 41.144 16Zm0 12c4.383 0 8.766.574 13.149 1.687-.042 10.69-.965 21.523-13.149 28.079-12.185-6.555-13.107-17.389-13.15-28.079C32.378 28.574 36.76 28 41.144 28Z"></path>
                </g>
              </svg>
              <span className="text-white font-semibold text-xs mx-2">{v}</span>
            </div>
            <button
              onClick={openSession}
              session={v}
              className="mx-1 text-xs self-end w-fit transition-all duration-300 bg-green-400 text-black rounded-lg font-bold px-2 py-1 border hover:bg-black hover:text-green-400 border-green-400"
            >
              Open
            </button>
            <button
              onClick={deleteSession}
              session={v}
              className="text-nowrap mx-1 text-xs self-end w-fit transition-all duration-300 bg-green-400 text-black rounded-lg font-bold px-2 py-1 border hover:bg-black hover:text-green-400 border-green-400"
            >
              Delete Session
            </button>
          </div>
        );
      })}
      <span className="text-white text-xs text-center">
        The sessions do not save any data & gets destroyed after sometime.
      </span>
    </div>
  );
};

export default SessionView;

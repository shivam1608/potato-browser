import React, { useEffect, useState } from "react";
import { IO } from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateSession = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    region: "NA",
    search_engine: "google",
    dark: true,
    width: 1280,
    height: 720,
    ublock: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.promise(
      IO.post("", { ...form }),
      {
        loading: "Creating Session",
        success: () => {
          setLoading(false);
          return "Session Created";
        },
        error: () => {
          setLoading(false);
          return "Failed to create session";
        },
      },
      {
        style: {
          background: "#121212",
          color: "rgb(74 222 128)",
        },
        success: {
          duration: 5000,
          icon: "🔥",
        },
      }
    );
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const data = {};

    if (field === "size") {
      const split = e.target.value.split(":");
      const width = parseInt(split[0]);
      const height = parseInt(split[1]);

      data["height"] = height;
      data["width"] = width;

      setForm((prev) => {
        return { ...prev, ...data };
      });

      return;
    }

    data[field] = e.target.value;
    setForm((prev) => {
      return { ...prev, ...data };
    });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col text-green-400 text-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
          <div className="flex items-center my-1">
            <label className="font-semibold">Region</label>
            <select
              onChange={handleChange}
              value={form["region"]}
              name="region"
              className="text-white bg-[#181818] outline-none rounded-md p-2 w-full mx-2"
            >
              <option value="NA">North America</option>
              <option value="AS">Asia</option>
              <option value="EU">Europe</option>
            </select>
          </div>
          <div className="flex items-center my-1">
            <label className="font-semibold text-nowrap">Search Engine</label>
            <select
              onChange={handleChange}
              value={form["search_engine"]}
              name="search_engine"
              className="text-white bg-[#181818] outline-none rounded-md p-2 w-full mx-2"
            >
              <option value="duckduckgo">Duck Duck Go</option>
              <option value="ecosia">Ecosia</option>
              <option value="google">Google</option>
              <option value="startpage">Startpage</option>
              <option value="brave">Brave</option>
            </select>
          </div>
          <div className="flex items-center my-1">
            <label className="font-semibold">Theme</label>
            <select
              onChange={handleChange}
              value={form["dark"]}
              name="dark"
              className="text-white bg-[#181818] outline-none rounded-md p-2 w-full mx-2"
            >
              <option value={false}>Light</option>
              <option value={true}>Dark</option>
            </select>
          </div>
          <div className="flex items-center my-1">
            <label className="font-semibold text-nowrap">Size</label>
            <select
              onChange={handleChange}
              value={`${form["height"]}:${form["width"]}`}
              name="size"
              className="text-white bg-[#181818] outline-none rounded-md p-2 w-full mx-2"
            >
              <option value="1280:720">1280 x 720</option>
              <option value="600:400">600 x 400</option>
              <option value="1366:768">1366 x 768</option>
              <option value="1440:900">1440 x 900</option>
              <option value="1920:1080">1920 x 1080</option>
            </select>
          </div>
        </div>

        <button
          disabled={loading}
          className="self-end my-4 w-fit transition-all duration-300 bg-green-400 text-black rounded-lg font-bold px-4 py-2 border hover:bg-black hover:text-green-400 border-green-400 disabled:opacity-80 disabled:cursor-wait"
        >
          Create Session
        </button>
      </form>
    </>
  );
};

export default CreateSession;

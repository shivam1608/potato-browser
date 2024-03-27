import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IO } from "../api";
import Hyperbeam from "@hyperbeam/web";

const VM = () => {
  const navigate = useNavigate();
  const params = useParams();
  const container = useRef();
  const [hb, setHb] = useState();

  useEffect(() => {
    const sessionId = params.id;
    try {
      IO.get(`/${sessionId}`).then(async (res) => {
        const { admin_token, embed_url } = res.data;
        try {
          const hb = await Hyperbeam(container.current, embed_url, {
            timeout: 5000,
            adminToken: admin_token,
          });
          setHb(hb);
        } catch (e) {
          console.log(e);
        }
      });
    } catch (e) {
      navigate("/", { replace: true });
    }
  }, []);

  return <div className="w-full h-full aspect-video" ref={container}></div>;
};

export default VM;

import React, { useEffect, useRef } from 'react'
import Hyperbeam from "@hyperbeam/web";

const Canvas = ({embedUrl}) => {

    const canvas = useRef();
    const hb = useRef();

    useEffect(() => {
        hb.current = Hyperbeam(canvas.current, embedUrl, {
            timeout: 5000,
            videoPaused: false,
            delegateKeyboard: true,
        });
      
    }, []);
    

  return (
    <div ref={canvas}></div>
  )
}

export default Canvas;
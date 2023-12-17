import React from 'react'
import { useState } from 'react';

const Login = ({user, setUser , setEmbedUrl}) => {


    const loginSession = async () => {

        localStorage.setItem("user" , user);

        let url = "https://all-cors-proxy-util.vercel.app/hyperbeam";
        let res = await fetch(url , {
            method : "GET",
            headers : {
                "Authorization" : `Bearer ${user}`
            }
        });
        let response = await res.json();
        let sessions = response["results"];
        if(sessions.length == 0){
            url = "https://all-cors-proxy-util.vercel.app/hyperbeam";
            res = await fetch(url , {
                method : "POST",
                headers : {
                    "Authorization" : `Bearer ${user}`
                },
                body : JSON.stringify({
                    search_engine : "google",
                    dark : true
                })
            });
            let response = await res.json();
            setEmbedUrl(response["embed_url"]);
        }else{
            url = `https://all-cors-proxy-util.vercel.app/hyperbeam/${sessions[0].id}`;
            res = await fetch(url , {
                method : "GET",
                headers : {
                    "Authorization" : `Bearer ${user}`
                }
            });
            response = await res.json();
            setEmbedUrl(response["embed_url"]);
        }
    }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <span className='text-6xl font-bold text-orange-400'>🥔 Potato Browser</span>
        <input onChange={(e)=>setUser(e.target.value)} value={user} type="text" placeholder='Enter Token' className='px-4 py-2 m-5 rounded-md text-white text-sm font-bold bg-[#232323] focus-within:outline-orange-400' />
        <button onClick={loginSession} className='py-2 px-4 text-white bg-orange-500 font-bold text-sm rounded-md'>Login</button>
    </div>
  )
}

export default Login;
import React from "react";
import { Link } from "react-router-dom";

const PublicTokens = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col w-full md:w-2/3 lg:w-1/2">
        <Link
          to={-1}
          className="text-xs self-end my-4 w-fit transition-all duration-300 bg-green-400 text-black rounded-lg font-bold px-2 py-1 border hover:bg-black hover:text-green-400 border-green-400 disabled:opacity-80 disabled:cursor-wait"
        >
          Back
        </Link>
        <span className="text-xl text-green-400 font-bold">Public Tokens</span>
        <p className="text-white text-sm">
          Public tokens are not reliable may work may not they are just here to
          test the website without any time waste. if you want to obtain your
          own token you can find one on dashboard page after signup on{" "}
          <a className="text-blue-300" href="https://hyperbeam.com/dashboard/">
            Hyperbeam.
          </a>
        </p>
        <h1 className="text-xl text-green-400 font-bold mt-4">Token List</h1>
        <span className="text-red-500 text-xs">
          IF YOU USE PUBLIC TOKENS NOTE THAT *ANYONE* CAN SEE YOUR SESSIONS.{" "}
          <br /> DO NOT SIGNIN TO SERVICES LIKE GOOGLE,YAHOO,ETC WHILE USING
          PUBLIC TOKENS <br /> DO NOT ENTER ANY PERSONAL INFORMATION WHILE USING
          PUBLIC TOKENS
        </span>
        <ul className="list-disc text-green-400 mx-5 text-sm mt-4">
          <li>
            <span className="text-white">
              sk_test_ucKOnbT5V0EDWL_VPYteYW9F3r3qNcLHmUM_dyT2v_g
            </span>
          </li>
          <li>
            <span className="text-white">
              sk_test_1vn6xP__xLfDYYQq9X55reXOAOiYQBO4jTsd3URiDzc
            </span>
          </li>
          <li>
            <span className="text-white">
              sk_test_vzOklt7t7VyHYMnjK2JGIRmzBcerCu59w5YuN-84TKM
            </span>
          </li>
          <li>
            <span className="text-white">
              sk_test_AT_VQDo2166RjtmUJ0vN8kQMorPXN5epINN8oYcW1pg
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublicTokens;

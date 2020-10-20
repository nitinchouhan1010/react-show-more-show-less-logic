import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function App() {
  const [showLess, setshowLess] = useState(true);

  const str =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum :)!";

  var resultStr = showLess ? str.slice(0, 100) : str;

  const changeShow = () => {
    setshowLess(!showLess);
  };

  return (
    <div class="container py-4">
      <p>{resultStr}</p>
      <button className="btn btn-primary" onClick={changeShow}>
        {showLess ? "Show more" : "Show Less"}
      </button>
    </div>
  );
}

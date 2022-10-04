import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../style/main.css";
function Main() {
  const navigate = useNavigate();
  const sharePhoto = () => {
    navigate("/accountPage");
  };

  return (
    <div>
      <div className="navBar">
        <ul>
          <li>
            {" "}
            <a className="s2" href="#">
              Behance
            </a>
          </li>
          <li>
            {" "}
            <a className="s1" href="#">
              Discover
            </a>
          </li>
          <li>
            {" "}
            <a className="s1" href="#">
              Livestreams
            </a>
          </li>
          <li>
            {" "}
            <a className="s1" href="#">
              Hire
            </a>
          </li>
          <li>
            {" "}
            <a className="s1" href="#">
              Jobs
            </a>
          </li>

          <li className="sharePhoto">
            <img
              onClick={sharePhoto}
              className="linkToAccountPage"
              src="https://images8.alphacoders.com/115/thumb-1920-1150370.jpg"
            />
          </li>
          <li>
            <button className="linkShare">Rasm Ulashish</button>
          </li>

          <li>
            <button className="signbt">Sign up</button>
          </li>
        </ul>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Main;

import React from "react";
import '../style/main.css'
function Main() {
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
          <li>
            <button className="signbt">Sign up</button>
          </li>
        </ul>
      </div>
      <div className="content"></div>
      <div className="footer">
        <ul>
          <li>
            {" "}
            <a className="s3" href="#">
              More Behance
            </a>
          </li>
          <li>
            {" "}
            <select id="cars">
              <option value="fr">French</option>
              <option value="rus">Русский</option>
              <option value="eng" selected>
                English
              </option>
            </select>
          </li>
          <li>
            {" "}
            <a className="s4" href="#">
              Livestreams
            </a>
          </li>
          <li>
            {" "}
            <a className="s4" href="#">
              Hire
            </a>
          </li>
          <li>
            {" "}
            <a className="s4" href="#">
              Jobs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;

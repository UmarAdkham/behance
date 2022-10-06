import React from 'react'
import '../style/main.css'
function Footer() {
  return (
   <div>
     <div className="footer">
        <ul>
          <li>
            {" "}
            <a className="s3" href="#">
              More Behance
            </a>
          </li>
          <li>
        
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
  )
}

export default Footer


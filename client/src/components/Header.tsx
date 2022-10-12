import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hook/hook";
import "../style/main.css";
import Logout from "./Logout";
function Header() {
  const navigate = useNavigate();

  let userPhoto =
    useAppSelector((state) => state.user.profilRasmi) ||
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACOCAMAAADHAVDzAAAAb1BMVEX///8jHyDl5eUWERMAAAD8/PwkHiAhHyDr6+vY2Nj09PT4+Pimpqbw8PDf39+jo6PR0dHDw8OXl5eRkZG3t7eDg4Otra0bGRqKiorKyspkY2Q2NjYoJycQDQ4JBgh4eHhXV1dubm5LS0tGREU9PT2dl05dAAAD70lEQVR4nO2biXKrIBRArywKKoKIqLGabv//jc8taZvatM0o6bzhdNppltHjhcsFSQA8Ho/H4/F4PB6Px+PxeDwezy7Q4edPcE8NynjTcHZPhUwe2gh3UXuQ2R2CQYcziuKB4DAMgqDqSFSIezRJjvsqOBMSnDsWGK7Zdu8URqreOrYAi8OPDkEUdY4tOKlOp34XC8JdOiSP+OTw3gI/xg4lDAnCKS/eSYwPiXHnMAbik8QcisSZBI/mC//YMcc/D+56hezWJEaLTjqTKLtLg7NE6UziqQvCLyLx5EzigL/qE93BjcEwZD99LeEuEuVqcwRu+0TafVJYJLC77FAryRFMw1fkbpw4l45LC5cj5lg7ViVc1g6In/GHmrGAn2OXc7xhPnEpEYbTfMLlRFN+HrnDLnUoMF2uJJdzTCLdL8bylry1SBj0bb7oOSUrK7KkKiZROS5/6B2WHpl+6clA/6IHhXssfuarjse1aLw8dG8xnpEmScxEnCSOTz8FYLpsZevH12E93FXR62Nt1ZubC43hV5jyYegLuJrKaVXhoW88lEa4MZhg8rmbhswoeqvpUdV3z9KVhpDn1ByrdzgxDxaY4P01xq5g2tUSeoK8GnpKnb0k4vpyuP5USvs62XfYQq9kmch9SRSRF7Rnlqi2u24wa+BW7aYA2Y8cBouuzWCXEZQCi1anlmvgiO1T1uND/6M4DIRRf4h3SRFNfuQwDRlD79R7BELhb9LiI1E1d84tTei0Cv4NeF4bb9om6uo4uQZRW0vQsv+tRH+cqv52DoDalTXwdaoWbSyxvvC7Dhnn31s2x/HXrTG2B2wZCQrtN7VzjardVAKStfXvN4RBtO2NAlTdEImwQptK8B7fwMZ3/Sm6iT+yVfk/Qn/J/yvh8Xg8Ho/H4/F4PB6Px+PxeCbGLw2ct1gpnG7J0XHDM05OT9Hl1V02pqej6+nT4Ihxdnq6mc+VX2xEjw7MADWJqpGuJaqRrAtb16zgwBumb/u6AQWRolryRjT1eFTLeaosOjRNypS1KqfAU2aNSI1VQAdbXUKuwWQasrQUJaAUmCzYEy2s4uVNgaKgNNOq0KjIVZrpotDcyKRgBSvrxDw1QEuR2zwtUlVSVgDEkh5TC5aD5AXUIBHYzBRaGwm8vrG1RC71EAtV5o3lWmWSMdvUqGZlSW2qJ4k0l6lBZQzJKBEXoshzQDI+sjrWIDSFAhlTG3S8aQOGDsdiSjQsbZhlVuiGJ1yCarhOMs2FUhnTzJhYZXEz9V+rFdfCasMFIB0P/YgjQBwgQWz6NNjOXN8BvTlv5sNSunwyZfl3eYXO6XnOWji9Z87ft+dOj67fcP8HcbA1D7ZhUVQAAAAASUVORK5CYII=";

  const sharePhoto = () => {
    navigate("/user/accountPage");
  };
  const userPhotoPage = () => {
    navigate("/user/addPhoto");
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
              src={userPhoto}
            />
          </li>
          <li>
            <button className="linkShare" onClick={userPhotoPage}>
              Rasm Ulashish
            </button>
          </li>

          <li>
            <button className="signbt">Sign up</button>
          </li>

          <li>
            <Logout />
          </li>
        </ul>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Header ;

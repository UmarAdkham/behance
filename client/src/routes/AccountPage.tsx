import { useSelect } from "@mui/base";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserImgs from "../components/UserImgs";
import { useAppSelector } from "../hook/hook";
import "../style/account-page.scss";

function AccountPage() {

  const [joylashuv, setJoylashuv] = useState<any>({});

  let loginUser = useAppSelector((state) => state.user);

  let userPhoto =
    loginUser.profilRasmi ||
    "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144__340.png";
  // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACOCAMAAADHAVDzAAAAb1BMVEX///8jHyDl5eUWERMAAAD8/PwkHiAhHyDr6+vY2Nj09PT4+Pimpqbw8PDf39+jo6PR0dHDw8OXl5eRkZG3t7eDg4Otra0bGRqKiorKyspkY2Q2NjYoJycQDQ4JBgh4eHhXV1dubm5LS0tGREU9PT2dl05dAAAD70lEQVR4nO2biXKrIBRArywKKoKIqLGabv//jc8taZvatM0o6bzhdNppltHjhcsFSQA8Ho/H4/F4PB6Px+PxeDwezy7Q4edPcE8NynjTcHZPhUwe2gh3UXuQ2R2CQYcziuKB4DAMgqDqSFSIezRJjvsqOBMSnDsWGK7Zdu8URqreOrYAi8OPDkEUdY4tOKlOp34XC8JdOiSP+OTw3gI/xg4lDAnCKS/eSYwPiXHnMAbik8QcisSZBI/mC//YMcc/D+56hezWJEaLTjqTKLtLg7NE6UziqQvCLyLx5EzigL/qE93BjcEwZD99LeEuEuVqcwRu+0TafVJYJLC77FAryRFMw1fkbpw4l45LC5cj5lg7ViVc1g6In/GHmrGAn2OXc7xhPnEpEYbTfMLlRFN+HrnDLnUoMF2uJJdzTCLdL8bylry1SBj0bb7oOSUrK7KkKiZROS5/6B2WHpl+6clA/6IHhXssfuarjse1aLw8dG8xnpEmScxEnCSOTz8FYLpsZevH12E93FXR62Nt1ZubC43hV5jyYegLuJrKaVXhoW88lEa4MZhg8rmbhswoeqvpUdV3z9KVhpDn1ByrdzgxDxaY4P01xq5g2tUSeoK8GnpKnb0k4vpyuP5USvs62XfYQq9kmch9SRSRF7Rnlqi2u24wa+BW7aYA2Y8cBouuzWCXEZQCi1anlmvgiO1T1uND/6M4DIRRf4h3SRFNfuQwDRlD79R7BELhb9LiI1E1d84tTei0Cv4NeF4bb9om6uo4uQZRW0vQsv+tRH+cqv52DoDalTXwdaoWbSyxvvC7Dhnn31s2x/HXrTG2B2wZCQrtN7VzjardVAKStfXvN4RBtO2NAlTdEImwQptK8B7fwMZ3/Sm6iT+yVfk/Qn/J/yvh8Xg8Ho/H4/F4PB6Px+PxeCbGLw2ct1gpnG7J0XHDM05OT9Hl1V02pqej6+nT4Ihxdnq6mc+VX2xEjw7MADWJqpGuJaqRrAtb16zgwBumb/u6AQWRolryRjT1eFTLeaosOjRNypS1KqfAU2aNSI1VQAdbXUKuwWQasrQUJaAUmCzYEy2s4uVNgaKgNNOq0KjIVZrpotDcyKRgBSvrxDw1QEuR2zwtUlVSVgDEkh5TC5aD5AXUIBHYzBRaGwm8vrG1RC71EAtV5o3lWmWSMdvUqGZlSW2qJ4k0l6lBZQzJKBEXoshzQDI+sjrWIDSFAhlTG3S8aQOGDsdiSjQsbZhlVuiGJ1yCarhOMs2FUhnTzJhYZXEz9V+rFdfCasMFIB0P/YgjQBwgQWz6NNjOXN8BvTlv5sNSunwyZfl3eYXO6XnOWji9Z87ft+dOj67fcP8HcbA1D7ZhUVQAAAAASUVORK5CYII=";

  useEffect(()=>{
      axios
          .get('https://api.vatcomply.com/geolocate')
          .then(response=>{
            setJoylashuv(response.data)
          })
  }, [])

  return (
    <div className="account-page">
      <div className="add-photo-banner">
        <div className="upload-photo">
          <img
            style={{ borderRadius: "50%" }}
            src="https://thumbs.dreamstime.com/z/%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B0-%D0%B2%D0%BD%D0%B8%D0%B7-%D1%81-%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B8-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%BE%D0%B2-189931526.jpg"
            alt="404-img-strelka"
            width={50}
            height={50}
          />

          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            style={{ display: "none" }}
          />

          <h2>Добавить изображение баннера.</h2>
          <h4>Оптимальный размеры 3200 x 410px</h4>
        </div>
      </div>

      <div className="user-data">
        <div className="user-data-ichki-div">
          <div className="user-photo-profile">
            <img src={userPhoto} alt="404" />
          </div>

          <div className="h2parabtn">
            <h2>
              {loginUser.ism} {loginUser.familiya}
            </h2>
            <p>{joylashuv.name}</p>
            <button>
              <h3>
                <Link to={"/edit"}>Редактировать профиль</Link>
              </h3>
            </button>

            <div className="adobe-portfolio">
              <h3>Опробовать Adobe Portfolio</h3>
            </div>
          </div>

          <div className="nanyat">
            <h3>Нанять</h3>
            <hr />
            <h4>Ищете возможности?</h4>
            <p>
              Добавьте новый раздел «Нанять», чтобы сообщить посетителям, что вы
              ищете новые возможности для обеспечения занятости.
            </p>
            <button>Изменить доступность</button>
          </div>
          <p className="createDate">{loginUser.createdAt}</p>
        </div>
      </div>

      <div className="container-for-uploading-images">
        <div className="nav-bar">
          <ul>
            <li>
              <Link to="ish">adf</Link>
            </li>

            <li>
              <Link to="nft">KKK</Link>
            </li>

            <li>
              <Link to="jonliefir">sfse</Link>
            </li>

            <li>
              <Link to="kayfiyatDoskasi">fgdg</Link>
            </li>

            <li>
              <Link to="baholash">dfgdfg</Link>
            </li>

            <li>
              <Link to="tahlil">rgg</Link>
            </li>

            <li>
              <Link to="qoralama">dthtdh</Link>
            </li>

          </ul>
        </div>
        <div className="images-container"></div>
      </div>
      <UserImgs />
    </div>
  );
}

export default AccountPage;

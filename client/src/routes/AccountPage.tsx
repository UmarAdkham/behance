import React from "react";
import "../style/account-page.scss";
import Uploat from "./Uploat";


function AccountPage() {
  
  let vaqt=new Date().toLocaleString();

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

        <div className="user-photo-profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt="404-user-photo"
          />
        </div>
        <div className="h2pb">
          <h2>Sanjarbek Urolov</h2>
          <p>Uzbekistan</p>
          <button>
            <h3>Редактировать профиль</h3>
          </button>
          <div className="adobe-portfolio">
            <h3>Опробовать Adobe Portfolio</h3>
          </div>

          <div className="h2pb">
            <h2>Sanjarbek Urolov</h2>
            <p>Uzbekistan</p>
            <button>
              <h3>Редактировать профиль</h3>
            </button>
            <button className="adobe-portfolio">
              <h3>Опробовать Adobe Portfolio</h3>
            </button>
          </div>

          <div className="nanyat">
            <h4>Нанять</h4>
            <hr/>
            <h4 className="h4">Ищете возможности?</h4>
            <p>
              Добавьте новый раздел «Нанять», чтобы сообщить посетителям, что вы
              ищете новые возможности для обеспечения занятости.
            </p>
            <button id="btn">
              Изменить доступность
            </button>
          </div>
            <p>{vaqt}</p>


        </div>

        <div className="nanyat">
          <h3>Nanyat</h3>
          <hr style={{ width: "285px" }} />
          <h4>Ищете возможности?</h4>
          <p>
            Добавьте новый раздел «Нанять», чтобы сообщить посетителям, что вы
            ищете новые возможности для обеспечения занятости.
          </p>
        </div>
      </div>
      <Uploat/>
    </div>
  );
}

export default AccountPage;


 

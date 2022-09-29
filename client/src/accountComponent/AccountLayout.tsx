import React from "react";
import { Link } from "react-router-dom";

function AccountLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Работа</Link>
          </li>
          <li>
            <Link to="/">NFT</Link>
          </li>
          <li>
            <Link to="/">Прямые трансляции</Link>
          </li>
          <li>
            <Link to="/">Доски настроения</Link>
          </li>
          <li>
            <Link to="/">Оценки</Link>
          </li>
          <li>
            <Link to="/">Анализ</Link>
          </li>
          <li>
            <Link to="/">Черновики</Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}

export default AccountLayout;

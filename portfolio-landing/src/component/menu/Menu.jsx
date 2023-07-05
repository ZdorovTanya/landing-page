// import { useState } from "react";
import "./Menu.css";


function Menu() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <header class="header">
        <div class="container">
          <div class="header__body">
            <a href="#" class="header__logo">
              <img src="logo.svg" alt="" />
            </a>

            <div class="header__burger">
              <span></span>
            </div>

            <nav class="header__menu">
              <ul class="header__list">
                <li>
                  <a href="" class="header__link">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="" class="header__link">
                    Тесты
                  </a>
                </li>
                <li>
                  <a href="" class="header__link">
                    Форум
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Menu;

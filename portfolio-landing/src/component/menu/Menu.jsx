// import { useState } from "react";
import "./Menu.css";
import "../../js/burger.js";


function Menu() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__body">
            <a href="#" className="header__logo">
              <img src="/public/img/Logo.svg" alt="" />
            </a>

            <div className="header__burger">
              <span></span>
            </div>

            <nav className="header__menu">
              <ul className="header__list">
                <li>
                  <a href="" className="header__link">
                    Main
                  </a>
                </li>
                <li>
                  <a href="" className="header__link">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="header__link">
                    Get in touch
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

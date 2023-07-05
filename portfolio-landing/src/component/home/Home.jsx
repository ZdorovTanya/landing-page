import { useState } from "react";
import "./Home.css";

import Button from "../button/Button.jsx";
import Menu from "../menu/Menu.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <Menu />
        <section className="section">
          <div className="section__content">
            <div className="section__container">
              <div className="section__body">
                <h1 className="section__title">Hey, I’m Nick</h1>
                <div className="section__description">Frontend developer</div>
                <div className="section__text">
                  <span>
                    Help you to create high-quality digital products that your
                    clients will love and let your business thrive
                  </span>
                </div>
                <Button />
              </div>
            </div>
          </div>
          <div className="section__image">
            <img src="/public/img/photo/main-photo.svg" alt="" />
          </div>
        </section>

        <section className="section">
          <div className="section__content">
            <section className="about">
              <h2 className="about__header container">About me</h2>
              <div className="about__container container">
                <div className="about__images">
                  <img src="/public/img/photo/round-photo.svg" alt="" />
                </div>
                <div className="about__content">
                <p><strong>Nick Richardson</strong> - specialist in Frontend development. Clear code is my
                    passion. Solving issues through negotiations</p>
                  <Button />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

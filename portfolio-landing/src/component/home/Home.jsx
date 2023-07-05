import { useState } from "react";
import "./Home.css";

import Button from "../button/Button.jsx";
import Menu from "../menu/Menu.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <Menu/>
        <section className="section">
          <div className="section__content">
            <div className="section__container">
              <div className="section__body">
                <h1 className="section__title">Hey, I’m Nick</h1>
                <div className="section__description">Frontend developer</div>
                <div className="section__description text">
                  Help you to create high-quality digital products that your
                  clients will love and let your business thrive
                </div>
                <Button />
              </div>
            </div>
          </div>
          <div className="section__image">
            <img src="/public/img/photo/main-photo.svg" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

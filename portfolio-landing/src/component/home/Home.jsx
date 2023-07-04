import { useState } from "react";
import "./Home.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="block-columns">
            <div className="introduction">
              <h1 className="block-title">Hey, I’m Nick</h1>
              <h2 className="block-description">Frontend developer</h2>
              <div className="block-description text">
                Help you to create high-quality digital products that your
                clients will love and let your business thrive
              </div>
              <button type="button" className="btn-tg">
                <span className="btn-text">Get in touch</span>
                <span className="btn-icon">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.00004 9.99998L1.26904 1.12598C7.80185 3.02565 13.9624 6.02677 19.485 9.99998C13.9628 13.9738 7.80262 16.9755 1.27004 18.876L4.00004 9.99998ZM4.00004 9.99998H11.5H4.00004Z"
                      fill="#27272A"
                    />
                    <path
                      d="M4.00004 9.99998L1.26904 1.12598C7.80185 3.02565 13.9624 6.02677 19.485 9.99998C13.9628 13.9738 7.80262 16.9755 1.27004 18.876L4.00004 9.99998ZM4.00004 9.99998H11.5"
                      stroke="#FCFBFA"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="main-screen">
              <div className="main-screen__bg">
                <img src="/public/img/photo/main-photo.svg" alt="main foto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

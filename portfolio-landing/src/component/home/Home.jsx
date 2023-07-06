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
          <div className="section__image round">
            <img src="/public/img/photo/round-photo.svg" alt="" />
          </div>
          <div className="section__content">
            <div className="section__container about__container">
              <div className="section__body about__body">
                <div className="section__text">
                  <span>
                    <p>
                      <strong>Nick Richardson</strong> - specialist in Frontend
                      development. Clear code is my passion. Solving issues
                      through negotiations
                    </p>
                  </span>
                </div>
                <Button />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__content">
            <div className="section__container">
              <div className="section__body">
                <h3>Interests</h3>
                <div className="section__interests">
                  <div className="circle">
                    <svg
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.952 0.651027C18.0446 0.720994 18.1197 0.811514 18.1715 0.915458C18.2232 1.0194 18.25 1.13393 18.25 1.25003V15.303C18.2498 15.9549 18.0374 16.589 17.6448 17.1093C17.2522 17.6297 16.7007 18.008 16.074 18.187L14.754 18.564C14.4301 18.6612 14.0902 18.6931 13.754 18.6579C13.4177 18.6226 13.0918 18.521 12.7951 18.3588C12.4985 18.1965 12.237 17.977 12.0259 17.7129C11.8148 17.4488 11.6582 17.1454 11.5653 16.8204C11.4724 16.4953 11.445 16.155 11.4847 15.8192C11.5244 15.4834 11.6303 15.1589 11.7965 14.8644C11.9626 14.5699 12.1855 14.3114 12.4524 14.1038C12.7192 13.8962 13.0247 13.7436 13.351 13.655L15.662 12.995C15.9754 12.9055 16.2511 12.7163 16.4474 12.4562C16.6437 12.196 16.7499 11.879 16.75 11.553V5.99403L7.74996 8.56603V18.303C7.74983 18.9549 7.53738 19.589 7.14477 20.1093C6.75216 20.6297 6.20074 21.008 5.57396 21.187L4.25396 21.564C3.92973 21.6625 3.58912 21.6955 3.25201 21.6611C2.91489 21.6266 2.58802 21.5253 2.29043 21.3632C1.99285 21.2011 1.73052 20.9814 1.51874 20.7168C1.30695 20.4523 1.14995 20.1482 1.05689 19.8224C0.963834 19.4966 0.936575 19.1554 0.976706 18.819C1.01684 18.4825 1.12356 18.1573 1.29064 17.8625C1.45772 17.5677 1.68183 17.3091 1.94989 17.1018C2.21795 16.8945 2.5246 16.7426 2.85196 16.655L5.16196 15.995C5.47535 15.9055 5.75106 15.7163 5.94737 15.4562C6.14367 15.196 6.24989 14.879 6.24996 14.553V8.01703V4.25003C6.24999 4.08706 6.30311 3.92855 6.40126 3.79846C6.49941 3.66837 6.63727 3.57379 6.79396 3.52903L17.294 0.529027C17.4056 0.497031 17.5231 0.491397 17.6373 0.512568C17.7515 0.533739 17.8592 0.581137 17.952 0.651027Z"
                        fill="#27272A"
                      />
                    </svg>
                  </div>

                  <div className="section__education__row">
                    <div className="section__about__title">Music</div>
                    <div className="section__about__text">
                      Indie rock | Reggae
                    </div>
                  </div>
                </div>
                <div className="section__interests">
                  <div className="circle">
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5989 0.5C20.2229 0.5 19.8559 0.611 19.5439 0.82L14.4639 4.205C13.1892 5.05509 12.0235 6.05823 10.9929 7.192C13.1098 8.1871 14.8128 9.89011 15.8079 12.007C16.9418 10.9761 17.9449 9.81006 18.7949 8.535L22.1809 3.456C22.3716 3.16961 22.481 2.83687 22.4975 2.49321C22.514 2.14956 22.437 1.80787 22.2746 1.50453C22.1123 1.20119 21.8707 0.947563 21.5756 0.770666C21.2805 0.59377 20.943 0.500226 20.5989 0.5ZM12.2989 14.525C12.9545 14.1609 13.5876 13.7579 14.1949 13.318C13.7913 12.2971 13.1826 11.3699 12.4063 10.5936C11.6301 9.81737 10.7028 9.20861 9.68193 8.805C9.24208 9.41197 8.83903 10.0448 8.47493 10.7L8.19693 11.2C9.05308 11.4463 9.83263 11.9061 10.4625 12.5361C11.0923 13.1661 11.5519 13.9458 11.7979 14.802L12.2999 14.524L12.2989 14.525ZM6.74993 12.5C5.75537 12.5 4.80155 12.8951 4.09828 13.5983C3.39502 14.3016 2.99993 15.2554 2.99993 16.25C2.99999 16.4555 2.95781 16.6589 2.87601 16.8474C2.79421 17.036 2.67453 17.2057 2.52441 17.3461C2.37429 17.4864 2.19692 17.5944 2.00331 17.6634C1.80971 17.7324 1.60399 17.7608 1.39893 17.747C1.26335 17.7379 1.12783 17.7658 1.00687 17.8277C0.885907 17.8896 0.784041 17.9833 0.712157 18.0986C0.640273 18.2139 0.601072 18.3466 0.598743 18.4825C0.596414 18.6183 0.631045 18.7523 0.698934 18.87C1.27582 19.8722 2.16745 20.6558 3.23537 21.0994C4.30329 21.5429 5.48776 21.6214 6.60488 21.3227C7.722 21.0241 8.70927 20.3649 9.4134 19.4477C10.1175 18.5304 10.4991 17.4064 10.4989 16.25C10.4989 15.7575 10.4019 15.2699 10.2135 14.8149C10.025 14.36 9.7488 13.9466 9.40058 13.5983C9.05236 13.2501 8.63897 12.9739 8.184 12.7855C7.72903 12.597 7.24139 12.5 6.74893 12.5H6.74993Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div className="section__education__row">
                    <div className="section__about__title">Art</div>
                    <div className="section__about__text">
                      Edvard Munch | Frida Kahlo
                    </div>
                  </div>
                </div>
                <div className="section__interests">
                  <div className="circle">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.5 6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75H20.25C20.8467 3.75 21.419 3.98705 21.841 4.40901C22.2629 4.83097 22.5 5.40326 22.5 6V18C22.5 18.5967 22.2629 19.169 21.841 19.591C21.419 20.0129 20.8467 20.25 20.25 20.25H3.75C3.15326 20.25 2.58097 20.0129 2.15901 19.591C1.73705 19.169 1.5 18.5967 1.5 18V6ZM3 16.06V18C3 18.414 3.336 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18V16.06L18.31 13.371C18.0287 13.0901 17.6475 12.9323 17.25 12.9323C16.8525 12.9323 16.4713 13.0901 16.19 13.371L15.31 14.25L16.28 15.22C16.3537 15.2887 16.4128 15.3715 16.4538 15.4635C16.4948 15.5555 16.5168 15.6548 16.5186 15.7555C16.5204 15.8562 16.5018 15.9562 16.4641 16.0496C16.4264 16.143 16.3703 16.2278 16.299 16.299C16.2278 16.3703 16.143 16.4264 16.0496 16.4641C15.9562 16.5018 15.8562 16.5204 15.7555 16.5186C15.6548 16.5168 15.5555 16.4948 15.4635 16.4538C15.3715 16.4128 15.2887 16.3537 15.22 16.28L10.06 11.121C9.77875 10.8401 9.3975 10.6823 9 10.6823C8.6025 10.6823 8.22125 10.8401 7.94 11.121L3 16.061V16.06ZM13.125 8.25C13.125 7.95163 13.2435 7.66548 13.4545 7.4545C13.6655 7.24353 13.9516 7.125 14.25 7.125C14.5484 7.125 14.8345 7.24353 15.0455 7.4545C15.2565 7.66548 15.375 7.95163 15.375 8.25C15.375 8.54837 15.2565 8.83452 15.0455 9.0455C14.8345 9.25647 14.5484 9.375 14.25 9.375C13.9516 9.375 13.6655 9.25647 13.4545 9.0455C13.2435 8.83452 13.125 8.54837 13.125 8.25Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <div className="section__education__row">
                    <div className="section__about__title">Photography</div>
                    <div className="section__about__text">Portraits</div>
                  </div>
                </div>
              </div>

              <div className="section__body">
                <h3>Education & Experience</h3>

                <div className="section__education">
                  <div className="ed__row">
                  <div className="education__year">2008 - Present</div>
                  <div className="educaion__row">
                    <div className="section__about__title">Middle Frontend developer</div>
                    <div className="section__about__text">Ozon</div>
                  </div>
                  </div>
               
                </div>
                <div className="section__education">
                  <div className="ed__row">
                  <div className="education__year">2006 - 2007</div>
                  <div className="educaion__row">
                    <div className="section__about__title">Frontend development courses</div>
                    <div className="section__about__text">Stepik</div>
                  </div>
                  </div>
                
                </div>
                <div className="section__education">
                  <div className="ed__row">
                  <div className="education__year">2000 - 2005</div>
                  <div className="educaion__row">
                    <div className="section__about__title">Frontend developer</div>
                    <div className="section__about__text">Saint Petersburg State University</div>
                  </div>
                </div>
                  </div>
                 
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

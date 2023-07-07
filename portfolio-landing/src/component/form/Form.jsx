// import { useState } from "react";
import "./Form.css";
import Submit from "../button/Submit.jsx";
// import "../../js/validation.js";

function Form() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <section className="form">
        <div className="form-container">
          <div className="form-bg">
            <h2>Let’s discuss your project</h2>
            <form action="#" method="post" className="form-valid">
              <div className="one__row">
                <div class="row">
                  <div class="col-25 req">
                    <label className="label__text" for="fname">
                      Your full name
                    </label>
                  </div>
                  <div class="col-75">
                    <svg
                      className="icon"
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.75 5C12.75 5.99456 12.3549 6.94839 11.6516 7.65165C10.9484 8.35491 9.99454 8.75 8.99998 8.75C8.00541 8.75 7.05159 8.35491 6.34833 7.65165C5.64506 6.94839 5.24998 5.99456 5.24998 5C5.24998 4.00544 5.64506 3.05161 6.34833 2.34835C7.05159 1.64509 8.00541 1.25 8.99998 1.25C9.99454 1.25 10.9484 1.64509 11.6516 2.34835C12.3549 3.05161 12.75 4.00544 12.75 5ZM1.50098 19.118C1.53311 17.1504 2.33731 15.2742 3.74015 13.894C5.14299 12.5139 7.03206 11.7405 8.99998 11.7405C10.9679 11.7405 12.857 12.5139 14.2598 13.894C15.6626 15.2742 16.4668 17.1504 16.499 19.118C14.1464 20.1968 11.5881 20.7535 8.99998 20.75C6.32398 20.75 3.78398 20.166 1.50098 19.118Z"
                        fill="#27272A"
                        stroke="#27272A"
                        stroke-width="0.1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <input
                      className="form-control"
                      required
                      type="text"
                      id="fname"
                      name="fullname"
                      placeholder="Name Surname"
                    ></input>
                  </div>
                </div>

                <div class="row">
                  <div class="col-25 req">
                    <label className="label__text" for="email">
                      Your email
                    </label>
                  </div>
                  <div class="col-75">
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.2 5.2998H19.2001C19.6849 5.29972 20.1515 5.48502 20.5042 5.81777L20.8473 5.45408L20.5042 5.81777C20.7789 6.07694 20.9684 6.41027 21.052 6.77374L12 11.2992L2.94791 6.77374C3.03154 6.41027 3.22098 6.07694 3.49569 5.81777C3.8484 5.48502 4.31498 5.29972 4.79987 5.2998H4.79996H19.2Z"
                        fill="#27272A"
                        stroke="#27272A"
                      />
                      <path
                        d="M21.5999 9.7417L11.9999 14.5417L2.3999 9.7417V16.8001C2.3999 17.4366 2.65276 18.0471 3.10285 18.4972C3.55293 18.9472 4.16338 19.2001 4.7999 19.2001H19.1999C19.8364 19.2001 20.4469 18.9472 20.897 18.4972C21.347 18.0471 21.5999 17.4366 21.5999 16.8001V9.7417Z"
                        fill="#27272A"
                      />
                    </svg>

                    <input
                      className="form-control"
                      required
                      type="email"
                      id="email"
                      name="mail"
                      placeholder="name@example.com"
                    ></input>
                  </div>
                </div>
              </div>

              <div class="row last">
                <div class="col-25">
                  <label className="label__text" for="subject">
                    Tell me about your project
                  </label>
                </div>
                <div class="">
                  <textarea 
                    id="subject"
                    name="subject"
                    placeholder="Add here a general description of your idea and target aim"
                  ></textarea>
                </div>
              </div>

              <Submit />
            </form>
          </div>
        </div>

        <div className="form-bg-img">
          <img src="/public/img/bc/bc.svg" alt="" />
        </div>
      </section>
    </>
  );
}

export default Form;

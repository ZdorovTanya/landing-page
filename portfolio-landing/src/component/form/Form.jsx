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
                  <div class="error">
                    <svg
                      className="mr-2"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1 12.5C21.1 14.9135 20.1412 17.2281 18.4347 18.9347C16.7281 20.6413 14.4135 21.6 12 21.6C9.58652 21.6 7.2719 20.6413 5.56532 18.9347C3.85874 17.2281 2.89999 14.9135 2.89999 12.5C2.89999 10.0866 3.85874 7.77193 5.56532 6.06535C7.2719 4.35877 9.58652 3.40002 12 3.40002C14.4135 3.40002 16.7281 4.35877 18.4347 6.06535C20.1412 7.77193 21.1 10.0866 21.1 12.5ZM13.2021 18.5021C13.5209 18.1833 13.7 17.7509 13.7 17.3C13.7 16.8492 13.5209 16.4168 13.2021 16.0979C12.8833 15.7791 12.4509 15.6 12 15.6C11.5491 15.6 11.1167 15.7791 10.7979 16.0979C10.4791 16.4168 10.3 16.8492 10.3 17.3C10.3 17.7509 10.4791 18.1833 10.7979 18.5021C11.1167 18.8209 11.5491 19 12 19C12.4509 19 12.8833 18.8209 13.2021 18.5021ZM12 6.00002C11.5491 6.00002 11.1167 6.17913 10.7979 6.49794C10.4791 6.81676 10.3 7.24916 10.3 7.70002V12.5C10.3 12.9509 10.4791 13.3833 10.7979 13.7021C11.1167 14.0209 11.5491 14.2 12 14.2C12.4509 14.2 12.8833 14.0209 13.2021 13.7021C13.5209 13.3833 13.7 12.9509 13.7 12.5V7.70002C13.7 7.24916 13.5209 6.81676 13.2021 6.49794C12.8833 6.17913 12.4509 6.00002 12 6.00002Z"
                        fill="#E02424"
                        stroke="#E02424"
                      />
                    </svg>

                    <input
                      className="form-control"
                      required
                      disabled
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

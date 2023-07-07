// import { useState } from "react";
import "./Button.css";

function Submit() {
//   const [count, setCount] = useState(0);

  return ( 
    <>
      <button type="submit" className="btn-tg">
        <span className="btn-text">Submit</span>
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
    </>
  );
}

export default Submit;

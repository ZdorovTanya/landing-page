import { useState } from "react";
import "./Footer.css";

function Footer() {
    const [count, setCount] = useState(0);

  return (
    <>
      <h4 className="footer text container">
          © 2022 JetRuby. All Rights Reserved
        </h4>
    </>
  );
}

export default Footer;

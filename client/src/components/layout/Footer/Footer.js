import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mt-[10vmax] p-[2vmax] bg-slate-900 text-white flex items-center"
    >
      <div className="leftFooter w-[20%] flex flex-col items-center">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="middleFooter w-[60%] text-center ">
        <h1>Volga</h1>
        <p>Lorem ipsum dolor sit amet.</p>

        <p>Copyrights 2022 &copy; OdeToCode</p>
      </div>

      <div className="rightFooter w-[20%] flex flex-col items-center">
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com/">Instagram</a>
        <a href="https://www.youtube.com/">Youtube</a>
        <a href="https://www.youtube.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

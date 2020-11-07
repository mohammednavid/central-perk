import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__header">
          <h6 className="footer__links">MENU</h6>
          <h6 className="footer__links">ABOUT US</h6>
          <h6 className="footer__links">CONTACT US</h6>
          <h6 className="footer__links">PRIVACY POLICY</h6>
          {/* <h6 className="footer__links">CAREERS</h6> */}
          <h6>FRANCHISE WITH US</h6>
        </div>
        <p>©Central Perk Pvt Ltd. All Rights Reserved</p>
      </div>
      <div className="footer__socialMedia">
        <div>
          <FacebookIcon className="footer__facebook" />
        </div>
        <div>
          <InstagramIcon className="footer__instagram" />
        </div>
        <div>
          <TwitterIcon className="footer__twitter" />
        </div>
        <div>
          <LinkedInIcon className="footer__linkedin" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;

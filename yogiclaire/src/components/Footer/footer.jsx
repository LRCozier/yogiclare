import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {

  return(
    <>
    <div className="footer-container">
      <footer>
        <p>&copy; 2025 Yogi Claire. All rights reserved.</p>
          <div className="social-links">
              <SocialIcon network="facebook" />
              <SocialIcon network="instagram"/>
          </div>
      </footer>
    </div>
    </>
  )
}

export default Footer;
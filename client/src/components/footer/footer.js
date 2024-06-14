import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer className="section bg-footer">
      <div className="text-center mt-0">
        <p className="footer-alt mb-0 f-14">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rithika-rayapudi-86ab0b247/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="footer-social-icon"/>
          </a>{" "}
          |{" "}
          {/* GitHub */}
          <a href="https://github.com/RithikaRayapudi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="footer-social-icon"/>
          </a>{" "}
          |{" "}
          {/* Instagram */}
          <a href="https://www.instagram.com/rithika_rayapudi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="footer-social-icon"/>
          </a>
        </p>
        <p className="footer-alt mb-0 f-14">Copyright © Rithika Rayapudi, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

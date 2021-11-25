import React from "react";
import './Footer.css'

const Footer = () => {
  return (
      <div className="all-footer">
    <div className="footer">
      <div>
        <h1>Social Media</h1>
        <h3>
          <i class="fab fa-facebook"></i> <span>Facebook</span>
        </h3>
        <h3>
          <i class="fab fa-twitter"></i> <span>Twiter</span>
        </h3>
        <h3>
          <i class="fab fa-linkedin-in"></i> <span>Linkdin</span>
        </h3>
        <h3>
          <i class="fab fa-instagram"></i> <span>Instragram</span>
        </h3>
      </div>
      <div>
        <h1>Contact Us</h1>
        <h3>
          <i class="fas fa-phone-square-alt"></i> <span>+1-604-555-5556</span>
        </h3>
        <h3>
          <i class="fas fa-phone-square-alt"></i> <span>+1-604-555-5556</span>
        </h3>
        <h3>
          <i class="fas fa-envelope"></i> <span>info@heavenhealth.com</span>
        </h3>
        <h3>
          <i class="fas fa-envelope"></i> <span>suport@heavenhealth.com</span>
        </h3>
      </div>
    </div>
    <p>Copyright @ 2021, HeavenHealth. All rights reserved.</p>
    </div>
  );
};

export default Footer;
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <h1>ic MidGreen</h1>
        <div className="footer-2">
          <div>
            <h2>
              <a href="https://github.com/IvanGit911/MidGreen">
                About the site
              </a>
            </h2>
            <h2>Inspired by</h2>

            <div>
                ic
                <a href="">Medium</a>
            </div>

            
          </div>

          <div className="footer-links">
            <h2>Discover</h2>
            <a href="">SDG</a>
            <a href="">Aashe</a>
            <a href="">...</a>
          </div>

          <div>
            <h2>Contact me</h2>
            <div className="footer-info">
              <p>Ivan Wang</p>
              <p>wang.han.ivan@hotmail.com</p>
              <p>Tel: 732-875-8961</p>
            </div>
          </div>
          <ul className="footer-icons">
            <li>Github</li>
            <li>Linkedin</li>
            <li>Anglelist</li>
            <li>Profolio</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;

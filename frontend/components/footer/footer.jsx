import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <h1>
          <img src={window.earth} alt="" />
          <p>MidGreen</p>{" "}
        </h1>
        <div className="footer-2">
          <div className="footer-2-1">
            <h2>
              <a href="https://github.com/IvanGit911/MidGreen">
                About the site
              </a>
            </h2>

            <div className="footer-medium">
              <h2>Inspired by</h2>
              <a href="https://medium.com/">
                <img src={window.medium} alt="" />
                <img src={window.medium_black} alt="" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h2>Discover</h2>
            <a href="https://www.epa.gov/">EPA</a>
            <a href="https://sustainabledevelopment.un.org/sdgs">SDG Goals</a>
            <a href="https://www.aashe.org/">Aashe</a>
            <a href="https://www.fema.gov/">FEMA</a>
          </div>

          <div className="footer-info">
            <h2>Contact me</h2>

            <p>Ivan Wang</p>
            <p>wang.han.ivan@hotmail.com</p>
            <p>Tel: 732-875-8961</p>
          </div>
          <div className="footer-icons">
            <a href="https://github.com/IvanGit911">
              <img src={window.github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/han-ivan-wang-883855126/">
              <img src={window.linkedin} alt="" />
            </a>
            <a href="https://angel.co/u/ivan-wang-14">
              <img src={window.angellist} alt="" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

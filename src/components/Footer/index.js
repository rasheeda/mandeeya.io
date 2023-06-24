import React from "react";
import Section from "./../Section";
import { Link } from "./../../util/router.js";
import "./styles.scss";

function Footer(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link to="/">
            <p className="logoText">
              mandeeya<span className="logoTextIO">.io</span>
            </p>
          </Link>
        </div>
        <div className="social right">
          <a
            href="https://www.linkedin.com/in/rasheedayehuza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-linkedin" />
            </span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCN9IrmDTWBDTC2jgVcFpVoQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-youtube" />
            </span>
          </a>
          <a
            href="https://twitter.com/rmandeeya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-facebook-f" />
            </span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
        </div>
        <div className="copyright left">{props.copyright}</div>
      </div>
    </Section>
  );
}

export default Footer;

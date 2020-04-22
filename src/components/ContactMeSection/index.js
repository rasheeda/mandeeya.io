import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import "./styles.scss";

function ContactMeSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div class="columns is-centered">
          <div className="column is-centered has-text-centered">
            You can send an email to: <strong>hello@mandeeya.io</strong>. Or
            connect via my social profiles:
          </div>
        </div>
        <div class="columns">
          <div className="column is-centered has-text-centered">
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
                href="https://twitter.com/rasheedayehuza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <i className="fab fa-twitter" />
                </span>
              </a>
              <a
                href="https://facebook.com/yehuza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <i className="fab fa-facebook-f" />
                </span>
              </a>
              <a
                href="https://instagram.com/rashkeed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <i className="fab fa-instagram" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactMeSection;

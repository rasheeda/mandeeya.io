import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Portfolio from "../Portfolio";
import "./styles.scss";

function PortfolioSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="PortfolioSection__box box">
          <Portfolio
            columns={2}
            items={[
              {
                title: "hookz.dev",
                body:
                  "A free online tool for helping developers test/debug web hooks and other types of HTTP requests.",
                image: "hookz.dev.png",
                tags: ["javascript", "nodejs", "expressjs", "reactjs", "sql"]
              },
              {
                title: "Nasara Mobile",
                body:
                  "A bulk sms and messaging company I started in 2012, which still runs with over 1800 users in Ghana.",
                image: "nm.png",
                tags: ["php", "laravel", "javascript", "html", "css", "sql"]
              },
              {
                title: "Formzhook",
                body:
                  "An open source Web and API service for easily posting form data without coding your own backend to handle form submission. ",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
                  tags: ["python", "flask", "reactjs", "sql", "scss"]
              },
              {
                title: "Nasara Mobile API",
                body:
                  "An API for the Nasara Mobile web platform",
                image:
                  "https://nasaramobile.com/images/nm_api.png",
                  tags: ["php", "laravel", "sql", "javascript"]
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default PortfolioSection;

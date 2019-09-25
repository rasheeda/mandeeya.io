import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features2 from "./../Features2";
import "./styles.scss";

function FeaturesSection2(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection2__box box">
          <Features2
            columns={2}
            items={[
              {
                title: "Nasara Mobile",
                body:
                  "A bulk sms and messaging company I started in 2012, which still runs with over 1800 users in Ghana.",
                image: "nm.png",
                tags: ["php", "laravel", ""]
              },
              {
                title: "Just Elect",
                body:
                  "An online voting system",
                image: "https://www.nasaratech.com/img/screens.png",
                tags: ["php", "reactjs"]
              },
              {
                title: "Formzhook (in-progress)",
                body:
                  "A Web and API service for easily posting form data without coding your own backend to handle form submission. ",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
                  tags: ["php", "reactjs"]
              },
              {
                title: "Nasara Mobile API",
                body:
                  "An API for the Nasara Mobile web platform",
                image:
                  "https://rasheedayehuza.com/assets/img/nasaramobile-api-documentation.png",
                  tags: ["php", "reactjs"]
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection2;

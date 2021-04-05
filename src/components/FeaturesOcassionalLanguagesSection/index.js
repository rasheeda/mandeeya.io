import React from "react";
import Section from "../Section";
import Features from "../Features";
import "./styles.scss";
import SectionHeader from "./../SectionHeader";

function FeaturesOccasionalLanguagesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title="Occasionally"
          centered={true}
          size={4}
          color="primary"
        />
        <hr />
        <Features
          items={[
            {
              title: "Python",
              iconClass: "fab fa-python",
              iconColor: "info"
            },
            {
              title: "Flask",
              iconClass: "fas fa-flask",
              iconColor: "danger"
            },
            {
              title: "Raspberry Pi Tinkering",
              iconClass: "fab fa-raspberry-pi",
              iconColor: "primary"
            },
            {
              title: "Laravel",
              iconClass: "fab fa-laravel",
              iconColor: "success"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesOccasionalLanguagesSection;

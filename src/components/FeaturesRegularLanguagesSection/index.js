import React from "react";
import Section from "../Section";
import Features from "../Features";
import SectionHeader from "./../SectionHeader";
import "./styles.scss";

function FeaturesRegularLanguagesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title="Day-to-day"
          centered={true}
          size={4}
          color="primary"
        />
        <hr></hr>
        <Features
          items={[
            {
              title: "Java",
              iconClass: "fab fa-java",
              iconColor: "info"
            },
            {
              title: "C#",
              iconClass: "fab fa-code",
              iconColor: "info"
            },
            {
              title: "ReactJS",
              iconClass: "fab fa-react",
              iconColor: "success"
            },
            {
              title: "PHP",
              iconClass: "fab fa-php",
              iconColor: "info"
            },
            {
              title: "SQL",
              iconClass: "fas fa-database",
              iconColor: "danger"
            },
            {
              title: "Javascript",
              iconClass: "fab fa-js",
              iconColor: "dark"
            },
            {
              title: "Docker",
              iconClass: "fab fa-docker",
              iconColor: "danger"
            },
            {
              title: "Symfony",
              iconClass: "fab fa-symfony",
              iconColor: "dark"
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesRegularLanguagesSection;

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
              title: "PHP",
              subtitle: (
                <progress class="progress is-info" value="85" max="100">
                  85%
                </progress>
              ),
              iconClass: "fab fa-php",
              iconColor: "info"
            },
            {
              title: "SQL",
              subtitle: (
                <progress class="progress is-danger" value="70" max="100">
                  70%
                </progress>
              ),
              iconClass: "fas fa-database",
              iconColor: "danger"
            },
            {
              title: "ReactJS",
              subtitle: (
                <progress class="progress is-success" value="70" max="100">
                  70%
                </progress>
              ),
              iconClass: "fab fa-react",
              iconColor: "success"
            },
            {
              title: "GIT",
              subtitle: (
                <progress class="progress is-info" value="70" max="100">
                  70%
                </progress>
              ),
              iconClass: "fab fa-git",
              iconColor: "info"
            },
            {
              title: "Javascript",
              subtitle: (
                <progress class="progress" value="70" max="100">
                  70%
                </progress>
              ),
              iconClass: "fab fa-js",
              iconColor: "dark"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesRegularLanguagesSection;

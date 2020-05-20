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
              title: "Javascript",
              subtitle: (
                <progress class="progress" value="70" max="100">
                  70%
                </progress>
              ),
              iconClass: "fab fa-js",
              iconColor: "dark"
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
              title: "Docker",
              subtitle: (
                <progress class="progress is-danger" value="70" max="100">
                  50%
                </progress>
              ),
              iconClass: "fab fa-docker",
              iconColor: "danger"
            },
            {
              title: "Symfony",
              subtitle: (
                <progress class="progress is-dark" value="70" max="100">
                  70%
                </progress>
              ),
              iconClass: "fab fa-symfony",
              iconColor: "dark"
            },
            {
              title: "C#",
              subtitle: (
                <progress class="progress is-info" value="85" max="100">
                  85%
                </progress>
              ),
              iconClass: "fab fa-code",
              iconColor: "info"
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesRegularLanguagesSection;

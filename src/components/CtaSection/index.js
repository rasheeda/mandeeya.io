import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SectionButton from "./../SectionButton";
import "./styles.scss";

function CtaSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      backgroundImageOpacity={0.2}
    >
      <div className="container">
        <div className="columns has-text-centered-mobile is-centered has-text-centered">
          <div className="column">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
            />
          </div>
        </div>
        <div className="columns has-text-centered-mobile is-centered has-text-centered">
          <div className="column">
            <a href="#ContactMe">
              <SectionButton
                parentColor="warning"
                size="large"
                onClick={props.buttonOnClick}
              >
                {props.buttonText}
              </SectionButton>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;

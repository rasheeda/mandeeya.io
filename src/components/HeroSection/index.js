import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SectionButton from "./../SectionButton";
import "./styles.scss";

function HeroSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column">
            {/* is-256x256 */}
            <figure className="HeroSection__image image">
              <img src={props.image} alt="mandeeya" class="is-rounded"/>
            </figure>
          </div>
          <div className="column is-1" />
          <div className="column is-6-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
            />
            <a href="#ContactMe">
              <SectionButton
                parentColor={props.color}
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

export default HeroSection;

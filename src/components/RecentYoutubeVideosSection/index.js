import React from "react";
import Section from "../Section";
import SectionHeader from "./../SectionHeader";

function RecentYoutubeVideosSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div class="columns">
          <div class="column">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hlOHQfDSj9c?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="column">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ft9YoYO5ydE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="column">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c5WqzQhmCJI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default RecentYoutubeVideosSection;

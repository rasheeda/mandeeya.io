import React from "react";
import "./styles.scss";

const mapTagColor = {
  php: "is-dark",
  reactjs: "is-primary",
  laravel: "is-warning",
  flask: "is-black",
  python: "is-info",
  sql: "is-danger",
  javascript: "is-info",
  html: "is-info",
  nodejs: "is-black",
  expressjs: "is-warning"
};

function Portfolio(props) {
  return (
    <div className="Portfolio columns is-multiline is-centered is-gapless">
      {props.items.map((item, index) => (
        <div
          className={
            "Portfolio__column column" +
            (props.columns === 1 ? " is-full" : "") +
            (props.columns === 2 ? " is-half" : "") +
            (props.columns === 3 ? " is-one-third" : "") +
            (props.columns === 4 ? " is-one-quarter" : "")
          }
          key={index}
        >
          <div className="Portfolio__item has-text-centered">
            <figure className="Portfolio__image image">
              <img src={item.image} alt={item.title} />
            </figure>
            <h1 className="title is-4 is-spaced has-text-dark">{item.title}</h1>
            {item.tags.map(tag => (
              <code className={`tag ${mapTagColor[tag]}`}> {tag} </code>
            ))}
            <h2 className="subtitle is-6 has-text-dark">{item.body}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

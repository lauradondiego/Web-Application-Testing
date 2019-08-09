import React, { useState } from "react";

function Display(props) {
  return (
    <>
      <section className="ballsButton">
        <div className="ballsDisplay">{props.balls}</div>
      </section>
      <section className="strikesButton">
        <div className="strikesDisplay">{props.strikes}</div>
      </section>
      <section className="foulsButton">
        <div className="foulsDisplay">{props.fouls}</div>
      </section>
      <section className="hitsButton">
        <div className="hitsDisplay">{props.hits}</div>
      </section>
    </>
  );
}

export default Display;

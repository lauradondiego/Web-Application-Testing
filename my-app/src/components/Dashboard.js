import React, { useState } from "react";
import Display from "./Display";

function Dashboard() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  const ballsHandler = () => {
    if (balls === 4) {
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };
  const strikesHandler = () => {
    if (strikes === 2) {
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  };
  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };

  const foul = () => {
    return strikes === 2 ? null : setStrikes(strikes + 1);
    // if (strikes === 2) {
    //   return null;
    // } else {
    //   setStrikes(strikes + 1);
    // }
  };

  return (
    <>
      <section className="ballsButton">
        <button
          onClick={() => {
            ballsHandler();
          }}
          className="balls"
        >
          Number of Balls
        </button>
      </section>

      <section className="strikesButton">
        <button
          onClick={() => {
            strikesHandler();
          }}
          className="strikes"
        >
          Number of Strikes
        </button>
      </section>
      <section className="foulsButton">
        <button
          onClick={() => {
            foul();
          }}
          className="fouls"
        >
          Number of Fouls
        </button>
      </section>
      <section className="hitsButton">
        <button
          onClick={() => {
            hit();
          }}
          className="hits"
        >
          Number of Hits
        </button>
      </section>
      <Display balls={balls} strikes={strikes} fouls={fouls} hits={hits} />
    </>
  );
}

export default Dashboard;

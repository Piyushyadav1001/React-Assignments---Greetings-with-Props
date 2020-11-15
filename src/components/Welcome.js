import React from "react";
import "./App.css";
const Welcome = (props) => {
  return (
    <>
      <header>
        Hey !<h1>{props.name}</h1>
      </header>
      <h2>Welcome to Newton School.</h2>
    </>
  );
};
export default Welcome;

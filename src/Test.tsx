import React from "react";

const Render = ({ handle }) => {
  console.log("render");

  // const test = () => handle()
  return <h1 onClick={handle}>Render</h1>;
};

export default React.memo(Render);

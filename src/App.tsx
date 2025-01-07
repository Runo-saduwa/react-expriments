// Filename - App.js

import React, { useState, useCallback } from "react";
import Render from "./Test";

const App = () => {
  console.log("parent render");
  const [count, setCount] = useState(1);

  const handler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <Render handle={handler} />
    </div>
  );
};

export default App;

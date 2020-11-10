import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// stamp
const App = () => {

  return (
    <div>
      <h1 id='logo'>Adopt Me!</h1>
      <Pet name="Naabi" animal="Cat" breed="Korat?" />
      <Pet name="Joho" animal="Cat" breed="Himalayan" />
      <Pet name="Jayjay" animal="Dog" breed="Shih-tzu" />
    </div>
  );
};

// rendering to div we named root - using the stamp
// render() overrides anything contained in element
render(<App />, document.getElementById("root"));

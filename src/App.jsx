import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ColorPicker from "./components/ColorPicker";
import { useColors } from "./hooks/useColors";

const App = () => {
  return (
    <div className="container">
      <ColorPicker {...useColors()} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);

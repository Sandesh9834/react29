//Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.

import "./styles.css";
import { ColourPicker } from "./ColourPicker";

export default function App() {
  return (
    <div className="App">
      <ColourPicker />
    </div>
  );
}

import React from "react";
import "./App.css";
import img from '../assets/train.jpg'
function App() {
  return (
    <div>
      <p className="paragraph">HELLO THERE!!</p>
      <img className="image" src={img} alt="train!"/>
    </div>
  );
}
export default App;

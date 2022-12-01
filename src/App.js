import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import './App.css';
import React from "react";

function App() {
  const [fruits]= React.useState([
    {fruitName: "Bananas", id: 1},
    {fruitName: "Strawberries", id: 2},
    {fruitName: "Pears", id: 3},
    {fruitName: "Grapes", id: 4},
    {fruitName: "Peaches", id: 6}
  ]);

  return (
    <div className="App">
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
};

export default App;

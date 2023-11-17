import { useState, MouseEvent } from "react";
import "./index.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Link } from "react-router-dom";

function App() {
  const [counter, setCounter] = useState<number>();

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence="big" onClick={addCounter}>
        Кнопка
      </Button>
      <Input placeholder="Email"></Input>
    </>
  );
}

export default App;

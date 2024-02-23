import React, { useState } from "react";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import styles from "./App.module.css";
function App() {
  const [inputtedValue, setInputtedValue] = useState("");
  const keyDown = (e) => {
    let value = e.key;
    if(value==='='||value==="Enter"){
      const result=calculateResult(inputtedValue);
      setInputtedValue(result.toString());
    }
    else if (value === "Backspace") {
      setInputtedValue((prevValue) => prevValue.slice(0, -1));
    } 
    else if(value == 'C' || value == 'c'){
      setInputtedValue("");
    }
    else {
      setInputtedValue((prevValue) => prevValue + value);
    }
  };

  const buttonClicked = (value) => {
    if (value === "C") {
      setInputtedValue("");
    }
    else if(value==='='||value==="Enter"){
      const result=calculateResult(inputtedValue);
      setInputtedValue(result.toString());
    }
    
    else {
      setInputtedValue((prevValue) => prevValue + value);
    }
  };
  const calculateResult=(expression)=>{
    try{
      const result=eval(expression);
    if(!Number.isFinite(result)){
      throw new Error('Infinity')
    }
    return result;
  
  }
  catch(error){

    if(error instanceof SyntaxError|| error=='Infinity'){
      return error;
    }
    else{
      throw error;
    }
  }
}

  return (
    <div className={styles.calculator}>
      <Display keyDown={keyDown} value={inputtedValue} />
      <ButtonContainer buttonClicked={buttonClicked} />
    </div>
  );
}

export default App;

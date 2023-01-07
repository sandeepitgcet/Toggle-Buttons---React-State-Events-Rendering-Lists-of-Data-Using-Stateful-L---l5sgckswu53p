import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  
const [buttonState, setButtonState] = useState(true);

  const handleClick = () => {
    setButtonState(!buttonState)
  }
  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {buttonState?"OFF":"ON"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {buttonState?"ON":"OFF"}
      </button>
    </div>
  );
}


export default App;

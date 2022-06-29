import React, { useState } from "react";
import Makebar from "./Makebar";
import Buttons from "./Buttons";
import { selection, bubble, insertion, ms } from "./algos.js";
function Box() {
  const [bars, addit] = useState([]);
  const frameStyle = {
    display: "flex",
    border: "2px solid black",
    height: "690px",
    margin: "auto",
    width: "1500px",
    backgroundColor: "black",
  };

  function changeIt(value) {
    if (value === 1) {
      selection(bars, addit);
    } else if (value === 2) {
      bubble(bars, addit);
    }
    else if(value===3)
    {
      insertion(bars,addit);
    }
    else if(value===4){
      ms(bars,addit);
    }
  }

  function barAdd(event) {
    var temp = [];
    var s = "";
    var text = event.target.value;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        s += text[i];
        continue;
      }
      else if(parseInt(s)>100){
        alert("Enter elements between 0 to 100");
        event.target.value=text.substring(0,text.length-s.length-1);
      }
       else if (text[i] === " ") {
        let inte = parseInt(s);
        temp.push(inte);
        s = "";
      }
    }
    addit(temp);
  }
  
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function generateRandom() {
    const array = [];
    for (let i = 0; i < 45; i++) {
      array.push(randomIntFromInterval(5, 100));
    }
    addit(array);
  }
  var changeSty = 1;
  return (
    <div>
      <div className='inputbar'>
        <input
          type="text"
          id='input'
          name="bar"
          onChange={barAdd}
          placeholder="Enter positive numbers <= 100"
        />
        <Buttons
          barss={bars}
          color="red"
          name="Selection Sort"
          final={addit}
          value={1}
          changeit={changeIt}
        />
        <Buttons
          barss={bars}
          color="green"
          name="Bubble Sort"
          final={addit}
          value={2}
          changeit={changeIt}
        />
        <Buttons
          barss={bars}
          color="violet"
          name="Insertion Sort"
          final={addit}
          value={3}
          changeit={changeIt}
        />
        <Buttons
          barss={bars}
          color="skyblue"
          name="Merge Sort"
          final={addit}
          value={4}
          changeit={changeIt}
        />
        <button onClick={generateRandom} className="algo-button" style={{backgroundColor: "yellow"}} >Random Array</button>
      </div>
      <br />
      <div style={frameStyle}>
        {bars.map((len, index) => {
          if(len>=1000000){
            changeSty=3;
          }
           else if (len > 1000) {
            changeSty = 0;
          } else if (len < 0) {
            changeSty = 2;
          } else {
            changeSty = 1;
          }
          return <Makebar key={index} barss={len} changestyle={changeSty} />;
        })}
      </div>
    </div>
  );
}

export default Box;

import React from "react";

function Makebar(props) {
  const barStyle = {
    height: props.barss * 5,
    width: "25px",
    marginLeft: "2px",
    border: "2px solid white",
    bottom: "0px",
    color: "black",
    backgroundColor: "rgb(30, 155, 151)"
  };
  const changeStylee = {
    height: (props.barss * 5) / 1000,
    width: "25px",
    marginLeft: "2px",
    border: "2px solid white",
    bottom: "0px",
    color: "black",
    backgroundColor: "yellow"
  };
  const changeStylee2 = {
    height: -1 * (props.barss * 5),
    width: "25px",
    marginLeft: "2px",
    border: "2px solid white",
    bottom: "0px",
    color: "black",
    backgroundColor: "green",
  };
  var stylee, val;
  if (props.changestyle === 1) {
    stylee = barStyle;
    val = props.barss;
  } 
  else if (props.changestyle === 2) {
    stylee = changeStylee2;
    val = -1 * props.barss;
  }
  else {
    stylee = changeStylee;
    val = props.barss / 1000;
  }
  return <div style={stylee} className="bars">{val}</div>;
}

export default Makebar;

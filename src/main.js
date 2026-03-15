import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

function Main(){
  return (
    <>
      <Header/>
      <Body/>
    </>
   
  )
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<Main />);
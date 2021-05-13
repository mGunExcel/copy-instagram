import React from "react";
import "./Main.scss";
import Feed from '../../Components/Feed/Feed';
import tempData from '../../Data';

function Main() {
  return (
      <div className="Main">
        <Feed data = {tempData[0]}/>
        <Feed data = {tempData[1]}/>
        <Feed data = {tempData[2]}/>
      </div>
    )
}

export default Main;

/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie"
import './main.css';
//Functional Component 

const pieData = [
    {
      id: "java",
      label: "java",
      value: 195,
      color: "hsl(90, 70%, 50%)"
    },
    {
      id: "erlang",
      label: "erlang",
      value: 419,
      color: "hsl(56, 70%, 50%)"
    },
    {
      id: "ruby",
      label: "ruby",
      value: 407,
      color: "hsl(103, 70%, 50%)"
    },
    {
      id: "haskell",
      label: "haskell",
      value: 474,
      color: "hsl(186, 70%, 50%)"
    },
    {
      id: "go",
      label: "go",
      value: 71,
      color: "hsl(104, 70%, 50%)"
    }
  ];

const Pie = () => {
    return (    
        <div style={{height:800}}>
            <h1>TESTING PT 2 :D</h1>
            <p>be sure you run yarn add @nivo/pie</p>
        <ResponsivePie
            data={pieData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        />
        </div>
    );
  };
  

export default Pie;
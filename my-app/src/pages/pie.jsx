/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie"
//Functional Component 

const pieData = [
    {
      id: "period",
      label: "period",
      value: 5,
      color: "hsl(56, 70%, 50%)"
    },
    {
      id: "follicular phase",
      label: "follicular phase",
      value: 6,
      color: "hsl(103, 70%, 50%)"
    },
    {
      id: "fertile window",
      label: "fertile window",
      value: 5,
      color: "hsl(186, 70%, 50%)"
    },
    {
      id: "luteal phase",
      label: "luteal phase",
      value: 16,
      color: "hsl(104, 70%, 50%)"
    }
  ];

const Pie = () => {
    return (    
        <div style={{height:400}}>
        <ResponsivePie
            data={pieData}
            margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
            innerRadius={0.25}
            padAngle={0.7}
            cornerRadius={1.5}
            activeOuterRadiusOffset={4}
            borderWidth={0.5}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={1}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        />
        </div>
    );
  };
  

export default Pie;
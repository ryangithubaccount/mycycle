/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import { ResponsiveCalendar } from "@nivo/calendar"
//Functional Component 
const CalendarPage = () => {
  const data = [
    {
      day: '2021-12-11',
      val: 19
    },
    {
      day: '2022-01-27',
      val: 20
    }
  ]
  return (
    <div style={{height:800}}>
      <h1>
        TESTINGGGGGG
      </h1>
      <ResponsiveCalendar
        width={500}
        height={500}
        from='2021-10-23'
        to='2022-10-23'
        data={data}
      />
    </div>
  );
};

export default CalendarPage;
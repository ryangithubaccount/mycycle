/*index.jsx*/
import React, {useState} from "react";
import { ResponsiveCalendar } from "@nivo/calendar"
import './main.css';
import Pie from "./pie"
import { Link } from "react-router-dom";
import { ThemeProvider } from "@nivo/core";
import bean from '../images/bean.jpg';
//Functional Component 

const CalendarPage = () => {
  const temp = new Date();
  const today = temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate();
  const [date, setDate] = useState(today);
  const [val, setValue] = useState(0);
  return (
    <div id="calendar-page" style={{height:800}}>
        <div id="navbar">
        <div id="title">❉ MyCycle</div>
        <div id="navbar-items">
          <ul><Link to="/calendar" class="link">Home</Link></ul>
          <ul><Link to="/friends" class="link">Friends</Link></ul>
          <ul><Link to="/home" class="link">Log Out</Link></ul>
        </div>
      </div>
      <div class="page">
      <div class="module-container">
          <div class="module" id="m1">
      <Pie/>
      <h1>
        {date}
      </h1>
      <label htmlFor="value">value</label>
      <input
          type="text"
          name="value"
          value={val}
          onChange={(event) => setValue(event.target.value)}
      />
      <h3> The value is {val} </h3>
      <ResponsiveCalendar
        data={data}
        from={temp.getFullYear() - 1 + '-' + (temp.getMonth() + 1) + '-' + temp.getDate()}
        to={temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate()}
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
        onClick={(data) => setDate(data.day)}//, setValue(data.value)}
    />

</div>
          <div class="module" id="m2">
              <div id="m2-content">
                <img id="pfp" src={bean} alt="bean" />
                <h2>Bean Chan</h2>
                <p>bio here -- hi! I’m Bean Chan and I like chocolate n cookies</p>
                <br /><br />
                <button class="btn">Edit Profile</button>
                <button class="btn">Settings</button>
              </div>
          </div>
      </div>
      </div>


    </div>
  );
};

const data = [
  {

  },
  {

  }
]

export default CalendarPage;
import React, { useEffect, useState } from 'react';
import EventList from './EventList';
import { FIRST_EVENTS, SECOND_EVENTS, THIRD_EVENTS } from './Data';
import './schedule.css';

// The Schedule page
function Schedule() {
  const [currDay, setCurrDay] = useState(0);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const eventLists = document.getElementsByClassName('event-list');
    if (currDay === 1) {
      eventLists[1].style.display = 'block';
      eventLists[0].style.display = 'none';
      eventLists[2].style.display = 'none';
    } else if (currDay === 2) {
      eventLists[2].style.display = 'block';
      eventLists[1].style.display = 'none';
      eventLists[0].style.display = 'none';
    } else {
      eventLists[0].style.display = 'block';
      eventLists[1].style.display = 'none';
      eventLists[2].style.display = 'none';
    }
  }, [currDay]);

  window.addEventListener('reload', () => setSmallScreen(window.innerWidth < 600));
  window.addEventListener('scroll', () => setSmallScreen(window.innerWidth < 600));
  window.addEventListener('resize', () => setSmallScreen(window.innerWidth < 600));

  // Adds the "current-event" class (highlights it) to the first active event
  useEffect(() => {
    const activeEvents = document.getElementsByClassName('active-event');
    if (activeEvents.length) {
      const currentEvent = activeEvents[0];
      currentEvent.classList.add('current-event');
    }
  });

  return (
    <div className="section-container schedule-container general-style" id="schedule">
      <div className="green-planet" />
      <div className="mint-star" />
      <span className="section-title general-style" id="schedule-title">Schedule</span>
      <div className="schedule-disclaimer">
        This schedule is subject to change
      </div>
      <div className="timezone-disclaimer general-style">
        <i className="fas fa-exclamation-triangle disclaimer-icon" />
        All times listed below are in EDT (Eastern Daylight Time)
      </div>
      <div className="schedule-wrapper">
        {/* <div className="coming-soon event-list">Coming Soon...</div> */}
        <div className="tab-wrapper">
          <button
            className={`tab-button${(currDay === 0) ? ' button-active' : ''}`}
            onClick={() => {
              setCurrDay(0);
            }}
            type="button"
          >
            {smallScreen ? ('Fri.') : ('Friday')}
          </button>
          <button
            className={`tab-button${(currDay === 1) ? ' button-active' : ''}`}
            onClick={() => {
              setCurrDay(1);
            }}
            type="button"
          >
            {smallScreen ? ('Sat.') : ('Saturday')}
          </button>
          <button
            className={`tab-button${(currDay === 2) ? ' button-active' : ''}`}
            onClick={() => {
              setCurrDay(2);
            }}
            type="button"
          >
            {smallScreen ? ('Sun.') : ('Sunday')}
          </button>
        </div>
        <EventList id="first-events" events={FIRST_EVENTS} />
        <EventList id="second-events" events={SECOND_EVENTS} />
        <EventList id="third-events" events={THIRD_EVENTS} />
      </div>
    </div>
  );
}

export default Schedule;

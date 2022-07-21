import React from 'react';
// import EventList from './EventList';
// import { FIRST_EVENTS, SECOND_EVENTS, THIRD_EVENTS } from './Data';
import './schedule.css';

// The Schedule page
function Schedule() {
  // const [currDay, setCurrDay] = useState(0);
  // const [currEvents, setCurrEvents] = useState(FIRST_EVENTS);
  // const [smallScreen, setSmallScreen] = useState(false);

  // useEffect(() => {
  //   if (currDay === 0) {
  //     setCurrEvents(FIRST_EVENTS);
  //   } else if (currDay === 1) {
  //     setCurrEvents(SECOND_EVENTS);
  //   } else {
  //     setCurrEvents(THIRD_EVENTS);
  //   }
  // }, [currDay]);

  // window.addEventListener('reload', () => setSmallScreen(window.innerWidth < 600));
  // window.addEventListener('scroll', () => setSmallScreen(window.innerWidth < 600));
  // window.addEventListener('resize', () => setSmallScreen(window.innerWidth < 600));

  return (
    <div className="section-container schedule-container general-style" id="schedule">
      <div className="green-planet" />
      <div className="mint-star" />
      <div className="blue-star" />
      <span className="section-title general-style" id="schedule-title">Schedule</span>
      <div className="schedule-wrapper">
        <div className="coming-soon event-list">Coming Soon...</div>
        {/*
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
        <EventList events={currEvents} />
        */}
      </div>
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{ /* <div className="events-wrapper">
  <ScheduleEvent name="Fueling the rocket ship..."
  expiration="2021-09-24T17:00:00.000-04:00"className="rocket-ship-event" />
  <span className="schedule-sub general-style">FRIDAY - September 24th</span>
  {FIRST_EVENTS.map(event => (
    <ScheduleEvent name={event.name} expiration={event.endTime} key={event.name} />
  ))}
</div>
<div className="events-wrapper">
  <span className="schedule-sub general-style">SATURDAY - September 25th</span>
  {SECOND_EVENTS.map(event => (
    <ScheduleEvent name={event.name} expiration={event.endTime} key={event.name} />
  ))}
  <ScheduleEvent name="Rocket ship has landed!"
  expiration="2021-09-25T20:00:00.000-04:00" className="rocket-ship-event" />
</div> */ }

export default Schedule;

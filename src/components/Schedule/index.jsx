import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { firstEvents, secondEvents } from './Data';
import './schedule.css';

// Takes in a string (expiration), which is a Date string, to make a Date object
function ScheduleEvent({ expiration, name }) {
  const [expired, setExpired] = useState(false);

  // Sets the event as expired once its end time has passed
  useEffect(() => {
    // Creates a timer equal to the time between the end of the event and now
    const timeNow = Date.now();
    const endTime = new Date(expiration);
    const timeoutId = setTimeout(() => {
      // Once times up, expired state is set to true
      setExpired(true);
    }, endTime - timeNow);

    // Cleanup
    return () => clearTimeout(timeoutId);
  }, [expiration]);

  // Adds the "current-event" class (highlights it) to the first active event
  useEffect(() => {
    const activeEvents = document.getElementsByClassName('active-event');
    if (activeEvents.length) {
      const currentEvent = activeEvents[0];
      currentEvent.classList.add('current-event');
    }
  });

  return (
    <p className={expired ? 'expired-event general-style' : 'active-event general-style'}>
      {name}
    </p>
  );
}

// The Schedule page
function Schedule() {
  return (
    <div className="section-container schedule-container general-style" id="schedule">
      <h1 className="section-title general-style" id="schedule-title">Schedule</h1>
      {/* <p className="schedule-temp">Coming Soon...</p> */}
      <div className="timezone-disclaimer general-style">
        <i className="fas fa-exclamation-triangle disclaimer-icon" />
        All times listed below are in EDT (Eastern Daylight Time)
      </div>
      <div className="schedule-wrapper">
        <div className="events-wrapper">
          <span className="schedule-sub general-style">FRIDAY</span>
          {firstEvents.map(event => (
            <ScheduleEvent name={event.name} expiration={event.endTime} key={event.name} />
          ))}
        </div>
        <div className="events-wrapper">
          <span className="schedule-sub general-style">SATURDAY</span>
          {secondEvents.map(event => (
            <ScheduleEvent name={event.name} expiration={event.endTime} key={event.name} />
          ))}
        </div>
      </div>
      <div className="schedule-disclaimer">
        This schedule is subject to change
      </div>
    </div>
  );
}

// ScheduleEvent prop definition
ScheduleEvent.propTypes = {
  expiration: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Schedule;

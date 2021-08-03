import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { firstEvents, secondEvents } from './Data';
import './schedule.css';

function ScheduleEvent({ expiration, name }) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timeNow = Date.now();
    const endTime = new Date(expiration);
    const timeoutId = setTimeout(() => {
      setExpired(true);
    }, endTime - timeNow);

    return () => clearTimeout(timeoutId);
  }, [expiration]);

  useEffect(() => {
    const activeEvents = document.getElementsByClassName('active-event');
    if (activeEvents.length) {
      const currentEvent = activeEvents[0];
      currentEvent.classList.add('current-event');
    }
  });

  return (
    <p className={expired ? 'expired-event' : 'active-event'}>
      {name}
    </p>
  );
}

function Schedule() {
  return (
    <section className="schedule-container" id="schedule">
      <h1 className="section-title">Schedule</h1>
      <div className="schedule-disclaimer">
        <i className="fas fa-exclamation-triangle disclaimer-icon" />
        All times listed below are in EDT (Eastern Daylight Time)
      </div>
      <div className="schedule-wrapper">
        <div className="events-wrapper">
          <span className="schedule-sub">FRIDAY</span>
          {firstEvents.map(event => (
            <ScheduleEvent name={event.name} expiration={event.endTime} key={event.name} />
          ))}
        </div>
        <div className="events-wrapper">
          <span className="schedule-sub">SATURDAY</span>
          {secondEvents.map(event => (
            <ScheduleEvent name={event.name} expiration={event.endTime} key={event.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

ScheduleEvent.propTypes = {
  expiration: PropTypes.isRequired,
  name: PropTypes.isRequired,
};

export default Schedule;

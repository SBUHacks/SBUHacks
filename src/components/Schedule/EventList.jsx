import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Takes in a string (expiration), which is a Date string, to make a Date object
function ScheduleEvent({ expiration, name, time }) {
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
    <div className={expired ? 'expired-event general-style' : 'active-event general-style'}>
      <p className="event-time">
        {time}
      </p>
      <p className="event-name">
        {name}
      </p>
    </div>
  );
}

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <ScheduleEvent
          time={event.time}
          name={event.name}
          expiration={event.endTime}
          key={event.name}
        />
      ))}
    </div>
  );
}

// ScheduleEvent prop definition
ScheduleEvent.propTypes = {
  expiration: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

// EventList prop definition
EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  })).isRequired,
};

export default EventList;

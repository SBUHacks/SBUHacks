import React, { useEffect, useState } from "react";
import {startTime, firstEvents, secondEvents} from './Data'
import './Schedule.css'

function ScheduleEvent({expiration, name}) {
    const [expired, setExpired] = useState(false)

    useEffect(() => {
        const timeNow = Date.now()
        if (timeNow > startTime) {
            const timeoutId = setTimeout(() => {
                setExpired(true)
            }, expiration - timeNow)
    
            return () => clearTimeout(timeoutId)
        }
    }, [])

    useEffect(() => {
        const activeEvents = document.getElementsByClassName("active-event")
        if (activeEvents.length) {
            const currentEvent = activeEvents[0]
            currentEvent.classList.add("current-event")
        }
    })

    return (
        <p className={expired ? "expired-event" : "active-event"}>
            {name}
        </p>
    )
}

function Schedule() {

    return (
        <section className="schedule-container" id={"schedule"}>
            <h1 className="section-title">Schedule</h1>
            <div className="schedule-disclaimer">
                <i className="fas fa-exclamation-triangle disclaimer-icon"></i>All times listed below are in EDT (Eastern Daylight Time)
            </div>
            <div className="schedule-wrapper">
                <div className="events-wrapper">
                    <span className="schedule-sub">FRIDAY</span>
                    {firstEvents.map(event => (
                        <ScheduleEvent name={event.name} expiration={event.endTime} />
                    ))}
                </div>
                <div className="events-wrapper">
                    <span className="schedule-sub">SATURDAY</span>
                    {secondEvents.map(event => (
                        <ScheduleEvent name={event.name} expiration={event.endTime} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Schedule

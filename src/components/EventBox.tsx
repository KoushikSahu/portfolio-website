import React from 'react';
import { EventDescription } from './types';
import Event from './Event';
import './style.css';

function EventBox(): JSX.Element {
    const events: EventDescription[] = [
		{
			name: "ALLES! CTF 2021",
			date: "3-5 Sept 2021",
			time_from: "All day",
			time_to: "All day"
		},
    ];

    return (
        <div className="event-box">
            <h1 className="heading-text">Events</h1>
            <ul>
                {events.map((item:EventDescription, idx:number):JSX.Element => {
                    return <li key={idx}><Event description={item} /></li>;
                })}
            </ul>
        </div>
   );
}

export default EventBox;


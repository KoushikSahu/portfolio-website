import React from 'react';
import { EventDescription } from './types';
import Event from './Event';
import './style.css';

function EventBox(): JSX.Element {
    const events: EventDescription[] = [
		{
			name: "Topcoder TCO Round 1B",
			date: "28 Apr 2021",
			time_from: "4:30 PM",
			time_to: "6:30 AM"
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


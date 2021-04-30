import React from 'react';
import { EventDescription } from './types';
import Event from './Event';
import './style.css';

function EventBox(): JSX.Element {
    const events: EventDescription[] = [
		{
			name: "Google Codejam 2021 1C",
			date: "1 May 2021",
			time_from: "2:30 PM",
			time_to: "5:00 PM"
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


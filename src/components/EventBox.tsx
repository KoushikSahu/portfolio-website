import React from 'react';
import { EventDescription } from './types';
import Event from './Event';

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
        <div>
            <h1 className="px-5 py-1 mt-3 text-xl border-l-8 shadow-md md:mt-0 border-slate-800">Events</h1>
            <ul>
                {events.map((item:EventDescription, idx:number):JSX.Element => {
                    return <li className="px-5 py-1" key={idx}><Event description={item} /></li>;
                })}
            </ul>
        </div>
   );
}

export default EventBox;


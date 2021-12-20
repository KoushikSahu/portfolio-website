import React from 'react';
import { EventPropType } from './types'

function Event(props: EventPropType): JSX.Element {
    let {name, date, time_from, time_to} = props.description;

    return (
        <div className="w-full my-2 overflow-hidden rounded-lg shadow-md bg-slate-800">
					<div className="px-2 py-1 text-lg bg-slate-700">
            {name}<br />
					</div>
					<div className="px-2 py-1">
						{date}<br />
						{time_from} - {time_to}<br />
					</div>
        </div>
    )
}

export default Event;


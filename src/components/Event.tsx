import React from 'react';
import { EventPropType } from './types'

function Event(props: EventPropType): JSX.Element {
    let {name, date, time_from, time_to} = props.description;

    return (
        <div>
            {name}<br />
            {date}<br />
            {time_from} - {time_to}<br />
        </div>
    )
}

export default Event;


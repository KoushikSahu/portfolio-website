import React from 'react';
import { ProjectPropType } from './types';

function ProjectBox(props: ProjectPropType): JSX.Element {
	let {name, description, link} = props.description;
	return (
		<a href={link}>
			<div className="w-full my-2 overflow-hidden rounded-lg shadow-md bg-slate-800 md:h-full">
				<div className="px-2 py-1 text-lg bg-slate-700">
					<h2>{name}</h2>
				</div>
				<p className="px-2 py-1">{description}</p>
			</div>
		</a>
	)
}

export default ProjectBox;


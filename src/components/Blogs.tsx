import React from 'react';
import { BlogDescription } from './types'

function Blogs(): JSX.Element {
	let blogs: BlogDescription[] = [
	];

	return (
		<div>
			<h1 className="heading-text">Blogs written by me</h1>
			{blogs.length === 0 ? <p>Wow such empty!</p> : null}
			{blogs.map((item:BlogDescription, idx:number): JSX.Element => {
				return <li key={idx}><a href={item.link}>{item.name}</a></li>
			})}
		</div>
	);
}

export default Blogs;
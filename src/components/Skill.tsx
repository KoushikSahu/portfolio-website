import React from 'react';

function Skill():JSX.Element {
	return (
		<div>
			<h1 className="px-5 py-1 mt-3 text-xl shadow-md bg-slate-800">Skills</h1>
			<ul className="px-5 py-1">
				<li>Programming Languages: C/C++, Python, Java, C#, Javascript, Typescript</li>
				<li>Markup & Styling Languages: HTML, Latex, CSS</li>
				<li>Libraries: Reactjs, Bootstrap, Flask, PyTorch</li>
				<li>Frameworks: Django</li>
				<li>Databases: MySQL</li>
			</ul>
		</div>
	);
}

export default Skill;

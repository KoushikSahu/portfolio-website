import React, { useState } from 'react';
import { UserInfo } from './types';
import { WEBHOOK_URL } from './webhook'

function Contact():JSX.Element {
	let [info, setInfo]: [UserInfo, any] = useState({
		name: "",
		contact_info: "",
		message: ""
	});

	const handleName = (event: any): void => {
		setInfo({
			...info,
			name: event.target.value
		});
	}

	const handleContact = (event: any): void => {
		setInfo({
			...info,
			contact_info: event.target.value
		});
	}

	const handleMessage = (event: any): void => {
		setInfo({
			...info,
			message: event.target.value
		});
	}

	const sendToDiscord = async () => {
		let url: string = WEBHOOK_URL;
		let msg: object = {
			content: `Name: ${info.name}\nContact Info: ${info.contact_info}\nMessage: ${info.message}`
		}
		try {
			await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(msg)
			});
			alert('Message sent successfully');
			setInfo({
				name: "",
				contact_info: "",
				message: ""
			});
		}catch(err){
			alert("Error occured while sending message!");
		}
	}

	const submit = (e: any): void => {
		e.preventDefault();
		if(info.name.length > 0 &&
			info.contact_info.length > 0 &&
			info.message.length > 0){
				sendToDiscord();
		}else{
			alert("All fields are required");
		}
	}


	return (
		<div>
			<h1 className="px-5 py-1 mt-3 text-xl shadow-md bg-slate-800">Contact me</h1>
			<form className="px-5 py-1" onSubmit={submit}>
				<span>
					<div className="px-5 py-1 grid lg:grid-cols-6">
						<label className="lg:col-span-1">Name<span>*</span>:</label>
						<input className="w-full pl-2 rounded lg:col-span-5 bg-slate-700" type="text" name="name" placeholder="Full Name" value={info.name} onChange={handleName} />
					</div>
					<div className="px-5 py-1 grid lg:grid-cols-6">
						<label className="lg:col-span-1">Contact Info<span className="asterisk">*</span>:</label>
						<input className="w-full pl-2 rounded lg:col-span-5 bg-slate-700" type="text" name="contact_info" placeholder="E-mail/Contact no." value={info.contact_info} onChange={handleContact}/>
					</div>
					<div className="px-5 py-1 grid lg:grid-cols-6">
						<label className="lg:col-span-1">Message<span>*</span>:</label>
						<textarea className="w-full pl-2 rounded lg:col-span-5 bg-slate-700" name="message" placeholder="Enter Message" value={info.message} rows={5} onChange={handleMessage}/>
					</div>
					<div className="flex justify-center">
						<input type="submit" name="send_info" value="Submit" className="px-5 py-1 mt-2 ml-1 border-2 rounded shadow border-slate-500 hover:bg-slate-500 hover:text-slate-900 hover:shadow-large transform hover:scale-105 transition hover:ease-in-out"/>
					</div>
				</span>
			</form>
		</div>
	);
}

export default Contact;


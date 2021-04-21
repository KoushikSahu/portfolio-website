import React, { useState } from 'react';
import { UserInfo } from './types';
import './style.css';
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
		}
	}


	return (
		<div>
			<h1 className="heading-text">Contact me</h1>
			<form onSubmit={submit}>
				<span className="contact-grid">
				<label className="form-label">Name<span className="asterisk">*</span>:</label>
				<input className="form-input" type="text" name="name" placeholder="Full Name" value={info.name} onChange={handleName} />
				<label className="form-label">Contact Info<span className="asterisk">*</span>:</label>
				<input className="form-input" type="text" name="contact_info" placeholder="E-mail/Contact no." value={info.contact_info} onChange={handleContact}/>
				<label className="form-label">Message<span className="asterisk">*</span>:</label>
				<textarea className="form-input" name="message" placeholder="Enter Message" value={info.message} rows={5} onChange={handleMessage}/>
				<input type="submit" name="send_info" value="Submit" />
				</span>
			</form>
		</div>
	);
}

export default Contact;


import React, { useState } from 'react';

const PeopleForm = () => {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [status, setStatus] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = JSON.stringify({name, location, status})
		await fetch('http://localhost:4000/', {
			method: 'POST',
			body: data,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		window.location.reload();
	}

	return (
		<div>
			<form onSubmit={e => handleSubmit(e)}>
				<div className="form-group">
					<label htmlFor="nameInput">Name</label>
					<input type="text" className="form-control" id="nameInput" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
  			</div>
				<div className="form-group">
					<label htmlFor="locationInput">Location</label>
					<input type="text" className="form-control" id="locationInput" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
  			</div>
				<div className="form-group">
    			<label for="statusInput">What are you up to?</label>
    			<textarea className="form-control" id="statusInput" rows="4" value={status} onChange={e => setStatus(e.target.value)}></textarea>
  			</div>
					<button type="submit" class="btn btn-primary">Add</button>
			</form>
		</div>
	)
	
};

export default PeopleForm;
	
					

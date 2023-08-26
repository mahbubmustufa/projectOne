import React, { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const handleNameChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
		console.log(name);
	};
	return (
		<form>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					name="name"
					id="name"
					type="text"
					value={name}
					onChange={handleNameChange}
				/>
			</div>
		</form>
	);
};

export default Form;

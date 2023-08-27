import React, { useState } from "react";
import { Formik, useFormik } from "formik";

const Form = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			resetForm({ values: "" });
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					name="name"
					id="name"
					type="text"
					value={formik.values.name}
					onChange={formik.handleChange}
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					name="email"
					id="email"
					type="email"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input
					name="password"
					id="password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
			</div>
			<button type="submit">Signup</button>
		</form>
	);
};

export default Form;

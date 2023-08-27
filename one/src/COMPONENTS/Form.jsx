import React, { useState } from "react";
import { Formik, useFormik, yupToFormErrors } from "formik";
import { object, string, number, date, InferType } from "yup";

const Form = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: yup.object({
			name: yup.string().min(3, "Name must have altest 3 characters").required,
			email: yup.email().min(3).required,
			password: yup.string().min(6, "password must have atlest 6 characters")
				.required,
		}),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			resetForm({ values: "" });
		},
	});

	console.error(formik.errors);

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

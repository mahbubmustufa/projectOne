import React, { useState } from "react";
import style from "./faq.module.css";

const FAQ = ({ id, title, desc }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<article className={style.faq}>
			<div>
				<h1>{title}</h1>
				<button
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					{toggle ? "-" : "+"}
				</button>
			</div>
			{toggle && <p>{desc}</p>}
		</article>
	);
};

export default FAQ;

import React, { useState } from "react";

const Togla = () => {
	const [toggle, setToggle] = useState(true);

	return (
		<div>
			{toggle && (
				<p>
					Lorem Ipsum is simply dummy text of the printing and industry.
					LoremIpsum has been the industry's standard dummy text eversince
					the1500s,when an unknown printer took a galley of type crambled it
				</p>
			)}

			<div>
				<button
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					{toggle ? "Hide" : "Show"}
				</button>
			</div>
		</div>
	);
};

export default Togla;

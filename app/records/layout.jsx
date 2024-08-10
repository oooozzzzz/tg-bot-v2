import ChooseSorting from "@/components/ChooseSorting";
import React from "react";

function layout({ children }) {
	return (
		<div className="container">
			<ChooseSorting/>
			{children}
		</div>
	);
}

export default layout;

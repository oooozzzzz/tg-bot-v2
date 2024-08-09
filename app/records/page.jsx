import React, { Suspense } from "react";
import Records from "@/components/Records";
import Script from "next/script";
import loading from "./loading";
import Loading from "./loading";
function page() {
	return (
		<>
			<Records />
		</>
	);
}

export default page;

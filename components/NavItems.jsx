"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItems({ links }) {
	const pathname = usePathname();
	return (
		<>
			<div className="flex">
				{links.map(({ label, href }) => {
					const isActive = pathname === href;
					return <Link href={href} key={href} className={`${isActive ? "text-white" : ""} text-gray-400 mx-5`}>{label}</Link>;
				})}
			</div>
		</>
	);
}

export default NavItems;

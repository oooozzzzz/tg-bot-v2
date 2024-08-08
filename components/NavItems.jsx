"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItems({ links }) {
	const pathname = usePathname();
	return (
		<>
			<div className="flex gap-28">
				{links.map(({ label, href }) => {
					const isActive = pathname === href;
					return <Link href={href} key={href} className={`${isActive ? "border-b border-slate-200" : ""} `}>{label}</Link>;
				})}
			</div>
		</>
	);
}

export default NavItems;

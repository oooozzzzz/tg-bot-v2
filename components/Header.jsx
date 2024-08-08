import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

function Header() {

const links = [
	{label: "Записи", href: "/records" },
	{label: "Аналитика", href: "/analytics" },
]

	return (
		<header className="fixed z-30 text-2xl font-light left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-400 py-5 backdrop-blur-sm dark:border-neutral-800 dark:bg-zinc-900/70 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-900">
			<NavItems links={links}/>
		</header>
	);
}

export default Header;

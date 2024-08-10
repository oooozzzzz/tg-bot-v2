"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
function ChooseSorting() {
	const router = useRouter();
	const [position, setPosition] = useState("by_categories");
	useEffect(() => {
		router.push(`/records/${position}`); // Update the URL as well as trigger a navigation event
	}, [position]); // Only re-run effect if position changes
	return (
		<div className="w-full flex justify-end">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="font-light">
						Сортировать
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuRadioGroup
						value={position}
						onValueChange={setPosition}
						className="flex flex-col"
					>
						<DropdownMenuRadioItem value="by_categories">
							По категориям
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="by_date">
							По дате
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

export default ChooseSorting;

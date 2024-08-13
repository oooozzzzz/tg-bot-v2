import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

export function DeleteRecord({ categoryId, recordId, deleteRecord }) {
	const onClick = () => {
		deleteRecord({ categoryId, recordId});
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="icon">
					<Trash2 strokeWidth={"1.5px"} color="#f04343" className=""/>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Удалить запись?</DialogTitle>
				</DialogHeader>
				<DialogDescription>
          Вы уверены, что хотите удалить запись? Это действие нельзя отменить.
        </DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="destructive" onClick={onClick}>Удалить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

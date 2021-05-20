import ActionMenu from '../ui/ActionMenu';

interface Med {
	createdAt: string;
	dosage: string;
	frequency: string;
	id: number;
	medication: string;
	updatedAt: string;
	userId: number;
}

type Props = {
	Med: Med;
	open: boolean;
	close: () => void;
	click: () => void;
};

export default function Medication({ open, close, click, Med }: Props) {
	return (
		<div>
			<div className="flex items-center justify-between w-full h-16 border-black border bg-white rounded-md mt-2">
				<h1 className="ml-2 mr-3 font-bold text-lg ">{Med.medication}</h1>
				<h1 className="ml-2 mr-3 font-bold text-lg ">{Med.dosage}</h1>
				<h1 className="ml-2 mr-3 font-bold text-lg ">{Med.frequency}</h1>
				<ActionMenu click={click} />
			</div>
		</div>
	);
}

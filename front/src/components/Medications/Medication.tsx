import ActionMenu from '../ui/ActionMenu';

type Props = {
	open: boolean;
	close: () => void;
	click: () => void;
};

export default function Medication({ open, close, click }: Props) {
	return (
		<div>
			<div className="flex items-center justify-between w-full h-16 border-black border bg-white rounded-md mt-2">
				<h1 className="ml-2 mr-3 font-bold text-lg ">Ibuprofen</h1>
				<h1 className="ml-2 mr-3 font-bold text-lg ">2.5 50 mg</h1>
				<h1 className="ml-2 mr-3 font-bold text-lg ">3 times a day</h1>
				<ActionMenu click={click} />
			</div>
		</div>
	);
}

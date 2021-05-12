import { useState } from 'react';
import Medication from '../components/Medications/Medication';
import Button from '../components/ui/Button';
import AddModal from '../components/Modals/AddModal';
import EditModal from '../components/Modals/EditModal';

const screenHeight = {
	height: 'calc(100vh - 8.25rem)',
};

const Meds = Array.from({ length: 20 }, (_, index) => index + 1);

export default function Home() {
	const [openAdd, setAddOpen] = useState(false);
	const [openEdit, setEditOpen] = useState(false);

	return (
		<div>
			<AddModal open={openAdd} close={() => setAddOpen(false)} />
			<EditModal open={openEdit} close={() => setEditOpen(false)} />
			<div className="flex justify-end mt-5 mr-20">
				<Button onClick={() => setAddOpen(true)}>Add</Button>
			</div>
			<div className="flex justify-center mt-5">
				<div className="flex justify-between w-8/12">
					<h1 className="text-lg font-bold">Medication</h1>
					<h1 className="mr-6 text-lg font-bold">Dosage</h1>
					<h1 className="text-lg font-bold">Frequency</h1>
					<h1 className="mr-12 text-lg font-bold">Action</h1>
				</div>
			</div>
			<div className="flex justify-center mt-3">
				<div style={screenHeight} className="w-8/12 overflow-y-auto ">
					{Meds.map((m, i) => {
						return <Medication click={() => setEditOpen(true)} open={openEdit} close={() => setEditOpen(false)} />;
					})}
				</div>
			</div>
		</div>
	);
}

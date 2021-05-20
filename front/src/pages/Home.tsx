import { useState } from 'react';
import { useStoreState } from '../store';
import { useQuery } from 'react-query';
import axios from 'axios';
import Medication from '../components/Medications/Medication';
import Button from '../components/ui/Button';
import AddModal from '../components/Modals/AddModal';
import EditModal from '../components/Modals/EditModal';

const screenHeight = {
	height: 'calc(100vh - 8.25rem)',
};

function useMeds() {
	return useQuery('getMeds', async () => {
		const { data } = await axios.get('http://localhost:4000/api/meds', {
			headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
		});
		return data;
	});
}

export default function Home() {
	const [openAdd, setAddOpen] = useState(false);
	const [openEdit, setEditOpen] = useState(false);
	const { user } = useStoreState((state) => state.user);
	const { data } = useMeds();

	console.log(data);

	return (
		<div>
			<AddModal open={openAdd} close={() => setAddOpen(false)} />
			<EditModal open={openEdit} close={() => setEditOpen(false)} />
			<div className="flex justify-end mt-5 mr-20">
				<div>{user.email}</div>
			</div>
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
					{data.map((med: any) => {
						return <Medication Med={med} click={() => setEditOpen(true)} open={openEdit} close={() => setEditOpen(false)} />;
					})}
				</div>
			</div>
		</div>
	);
}

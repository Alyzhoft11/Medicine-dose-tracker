import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type Props = {
	click: () => void;
};

export default function ActionMenu({ click }: Props) {
	return (
		<div className="mr-10">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="outline-none">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
						</svg>
					</Menu.Button>
				</div>
				<Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
					<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
						<div className="px-1 py-1">
							<Menu.Item>
								{({ active }) => (
									<button onClick={click} className={`${active ? 'bg-purple-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
										{active ? <EditActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" /> : <EditInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
										Edit
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button className={`${active ? 'bg-purple-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
										{active ? <DeleteActiveIcon className="w-5 h-5 mr-2 text-purple-400" aria-hidden="true" /> : <DeleteInactiveIcon className="w-5 h-5 mr-2 text-purple-400" aria-hidden="true" />}
										Delete
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}

function EditInactiveIcon(props: any) {
	return (
		<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function EditActiveIcon(props: any) {
	return (
		<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
}

function DeleteInactiveIcon(props: any) {
	return (
		<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="5" y="6" width="10" height="10" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
			<path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
			<path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function DeleteActiveIcon(props: any) {
	return (
		<svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="5" y="6" width="10" height="10" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
}

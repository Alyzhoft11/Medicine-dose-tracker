import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
// import Label from './Label';

type Props = InputHTMLAttributes<HTMLInputElement> & {
	labelText: string;
};

export default function Input({ labelText, className, ...props }: Props) {
	return (
		<>
			{/* <Label>{labelText}</Label> */}
			<input className={clsx('bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 border focus:border-brand-600 focus:ring-brand-500 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20', className)} {...props} />
		</>
	);
}

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';

interface INotificationActionProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	imageUrl: StaticImport;
}

export function NotificationAction({
	imageUrl,
	...rest
}: INotificationActionProps) {
	return (
		<button
			{...rest}
			className="w-14 h-14 rounded-lg bg-zinc-500 flex items-center justify-center p-2 transition-all duration-300 hover:shadow-xl hover:bg-zinc-300"
		>
			<Image
				src={imageUrl}
				alt="X"
				className="w-full h-full"
			/>
		</button>
	);
}

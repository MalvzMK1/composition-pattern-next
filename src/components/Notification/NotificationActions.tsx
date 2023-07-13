import Image from 'next/image';

interface INotificationActionsProps {}

export function NotificationActions() {
	return (
		<div className="flex items-center justify-center gap-2">
			<button className="w-14 h-14 rounded-lg bg-zinc-500 flex items-center justify-center p-2 transition-all duration-300 hover:shadow-xl hover:bg-zinc-300">
				<Image
					src={require('@/assets/check.svg')}
					alt="Check mark"
					className="w-full h-full"
				/>
			</button>
			<button className="w-14 h-14 rounded-lg bg-violet-500 flex items-center justify-center p-2 transition-all duration-300 hover:shadow-xl hover:bg-violet-300">
				<Image
					src={require('@/assets/x.svg')}
					alt="X"
					className="w-full h-full"
				/>
			</button>
		</div>
	);
}

import { StaticRequire } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface INotificationIconProps {
	imageUrl: StaticRequire;
}

export function NotificationIcon({ imageUrl }: INotificationIconProps) {
	return (
		<Image
			src={imageUrl}
			alt="Me"
			className="h-24 w-24"
		/>
	);
}

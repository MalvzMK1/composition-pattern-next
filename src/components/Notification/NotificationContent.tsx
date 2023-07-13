interface INotificationContentProps {
	title: string;
	text: string;
}

export function NotificationContent({
	title,
	text,
}: INotificationContentProps) {
	return (
		<div className="flex-1">
			<h2 className="text-3xl font-bold">{title}</h2>
			<span>{text}</span>
		</div>
	);
}

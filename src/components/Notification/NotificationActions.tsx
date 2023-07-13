import { ReactNode } from 'react';

interface INotificationActionsProps {
	children: ReactNode;
}

export function NotificationActions({ children }: INotificationActionsProps) {
	return (
		<div className="flex items-center justify-center gap-2">{children}</div>
	);
}

import { ReactNode } from 'react';

// Define a interface que vai receber as childrens do componente
interface INotificationRootProps {
	children: ReactNode;
}

export function NotificationRoot({ children }: INotificationRootProps) {
	return (
		<div className="bg-zinc-600 w-full h-32 rounded-xl flex items-center px-3 py-2 gap-2">
			{/* Renderiza as childs do componente */}
			{children}
		</div>
	);
}

'use client';

import { Notification } from '@/components/Notification';

export default function Home() {
	return (
		<main className="w-screen h-screen bg-zinc-900 flex items-center justify-center">
			<div className="bg-zinc-800 w-1/2 h-1/2 rounded-3xl flex flex-col items-center justify-start px-10 py-10">
				<Notification.Root>
					<Notification.Icon imageUrl={require('@/assets/rocket.png')} />
					<Notification.Content
						title="Jornada Iniciada"
						text="Sua jornada começou! Desejamos sucesso nessa nova empreitada. Estamos aqui para apoiá-lo(a) ao longo do caminho. Boa sorte!"
					/>
					<Notification.Actions>
						<Notification.ActionButton
							imageUrl={require('@/assets/check.svg')}
							onClick={(e) => window.alert('Okay')}
						/>
						<Notification.ActionButton
							imageUrl={require('@/assets/x.svg')}
							onClick={(e) => window.alert('Okay')}
							className="bg"
						/>
					</Notification.Actions>
				</Notification.Root>
			</div>
		</main>
	);
}

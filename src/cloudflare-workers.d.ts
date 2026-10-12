declare module 'cloudflare:workers' {
	export const env: {
		EMAIL?: {
			send(message: {
				to: string;
				from: { name: string; email: string };
				replyTo: { name: string; email: string };
				subject: string;
				text: string;
			}): Promise<{ messageId: string }>;
		};
	};
}

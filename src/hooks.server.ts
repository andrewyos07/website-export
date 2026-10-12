import type { Handle } from '@sveltejs/kit/hooks';
import { jsonLd } from '#lib/schema.ts';

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			if (event.url.pathname !== '/') return html;
			const tag = `<script type="application/ld+json">${jsonLd}</script>`;
			return html.replace('</head>', `${tag}</head>`);
		}
	});
};

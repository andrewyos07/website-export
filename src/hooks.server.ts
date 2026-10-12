import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit/hooks';
import { site } from '#lib/content.ts';
import { jsonLd } from '#lib/schema.ts';

const canonical = new URL(site.publicUrl);

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.hostname === `www.${canonical.hostname}`) {
		const destination = new URL(event.url);
		destination.protocol = canonical.protocol;
		destination.hostname = canonical.hostname;
		destination.port = canonical.port;
		redirect(301, destination.href);
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			if (event.url.pathname !== '/') return html;
			const tag = `<script type="application/ld+json">${jsonLd}</script>`;
			return html.replace('</head>', `${tag}</head>`);
		}
	});
};

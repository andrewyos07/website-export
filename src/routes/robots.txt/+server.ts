import { site } from '#lib/content.ts';

export function GET() {
	const body = `User-agent: *
Allow: /

Sitemap: ${site.publicUrl}/sitemap.xml
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
}

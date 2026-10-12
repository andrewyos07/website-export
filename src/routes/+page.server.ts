import { dev } from '$app/env';
import { fail } from '@sveltejs/kit';
import { env } from 'cloudflare:workers';
import { incoterms, products, site, type QuoteValues } from '#lib/content.ts';
import type { Actions, PageServerLoad } from './$types';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inquiryCookie = 'inquiry_sent';
const sender = { name: site.name, email: 'noreply@bumisukapura.com' };
const commodityIds = new Set([...products.map((product) => product.id), 'other']);
const deliveryError =
	'The inquiry could not be sent. Write to info@bumisukapura.com and the operations desk will reply from there.';

function read(data: FormData, key: string) {
	return String(data.get(key) ?? '').trim();
}

function singleLine(value: string) {
	return value.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim();
}

function cleanMessage(value: string) {
	return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
}

function commodityName(id: string) {
	return products.find((product) => product.id === id)?.name ?? 'Other Indonesian commodity';
}

function quoteError(values: QuoteValues) {
	if (
		!values.name ||
		values.name.length > 120 ||
		!values.company ||
		values.company.length > 160 ||
		!emailPattern.test(values.email) ||
		values.email.length > 254 ||
		!commodityIds.has(values.commodity) ||
		!(incoterms as readonly string[]).includes(values.incoterm) ||
		!values.message ||
		values.message.length > 4000
	) {
		return 'Name, company, a valid email, and a shipment brief are required.';
	}

	return null;
}

export const load: PageServerLoad = ({ cookies }) => {
	const inquiry = cookies.get(inquiryCookie);
	return {
		inquirySent: inquiry === '1' || inquiry === 'local',
		inquiryLocal: inquiry === 'local'
	};
};

export const actions = {
	newsletter: async ({ request }) => {
		const data = await request.formData();
		const email = read(data, 'email');
		const consent = data.get('consent') === 'on';

		if (!emailPattern.test(email)) {
			return fail(400, { newsletter: { email, error: 'Enter a valid work email.' } });
		}

		if (!consent) {
			return fail(400, {
				newsletter: { email, error: 'Consent is required before we can write to you.' }
			});
		}

		return { newsletter: { email, success: true } };
	},
	quote: async ({ cookies, request }) => {
		const inquiry = cookies.get(inquiryCookie);

		if (inquiry === '1' || inquiry === 'local') {
			return fail(429, { quote: { locked: true, simulated: inquiry === 'local' } });
		}

		const data = await request.formData();
		const values: QuoteValues = {
			name: singleLine(read(data, 'name')),
			company: singleLine(read(data, 'company')),
			email: singleLine(read(data, 'email')),
			commodity: singleLine(read(data, 'commodity')),
			incoterm: singleLine(read(data, 'incoterm')),
			message: cleanMessage(read(data, 'message'))
		};
		const error = quoteError(values);

		if (error) return fail(400, { quote: { values, error } });

		const mail = env.EMAIL;

		if (!mail) {
			console.error('Inquiry email failed: EMAIL binding is missing');
			return fail(503, { quote: { values, error: deliveryError } });
		}

		try {
			await mail.send({
				to: site.email,
				from: sender,
				replyTo: { name: values.name, email: values.email },
				subject: `Supply inquiry from ${values.company}`.slice(0, 180),
				text: [
					`Name: ${values.name}`,
					`Company: ${values.company}`,
					`Email: ${values.email}`,
					`Commodity: ${commodityName(values.commodity)}`,
					`Incoterm: ${values.incoterm}`,
					'',
					values.message
				].join('\n')
			});
		} catch (cause) {
			console.error('Inquiry email failed', cause);
			return fail(502, { quote: { values, error: deliveryError } });
		}

		cookies.set(inquiryCookie, dev ? 'local' : '1', {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			secure: !dev
		});

		return { quote: { success: true, simulated: dev } };
	}
} satisfies Actions;

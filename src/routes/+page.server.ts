import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function read(data: FormData, key: string) {
	return String(data.get(key) ?? '').trim();
}

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
	quote: async ({ request }) => {
		const data = await request.formData();
		const values = {
			name: read(data, 'name'),
			company: read(data, 'company'),
			email: read(data, 'email'),
			commodity: read(data, 'commodity'),
			incoterm: read(data, 'incoterm'),
			message: read(data, 'message')
		};

		if (!values.name || !values.company || !values.message || !emailPattern.test(values.email)) {
			return fail(400, {
				quote: {
					values,
					error: 'Name, company, a valid email, and a shipment brief are required.'
				}
			});
		}

		return { quote: { values, success: true } };
	}
} satisfies Actions;

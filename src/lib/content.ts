export const site = {
	name: 'PT Irene Bumi Sukapura',
	publicUrl: 'https://irenebumisukapura.com',
	title: 'Indonesian Commodity Exporter | PT Irene Bumi Sukapura',
	description:
		'PT Irene Bumi Sukapura exports Indonesian coffee, spices, and coconut for B2B buyers. Documented lots, FOB CFR CIF terms, and L/C or T/T payment.',
	email: 'export@irenebumisukapura.co.id',
	whatsapp: 'https://wa.me/6281938473331',
	whatsappDisplay: '+62 819-3847-3331',
	linkedin: 'https://www.linkedin.com/company/irene-bumi-sukapura',
	locality: 'Sukapura, Tasikmalaya',
	region: 'West Java, Indonesia'
};

export const nav = [
	{ id: 'top', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'products', label: 'Products' },
	{ id: 'capabilities', label: 'Capabilities' },
	{ id: 'contact', label: 'Contact' }
] as const;

export type Product = {
	id: string;
	name: string;
	summary: string;
	image: string;
	alt: string;
	width: number;
	height: number;
	specs: { label: string; value: string }[];
};

export const products: Product[] = [
	{
		id: 'arabica-coffee',
		name: 'Coffee',
		summary: 'Green or roasted coffee, named on the offer. The photograph is the roasted cup reference.',
		image: '/media/coffee.webp',
		alt: 'Roasted coffee beans filling the frame',
		width: 960,
		height: 732,
		specs: [
			{ label: 'Form', value: 'Green bean or roasted, stated on the proforma' },
			{ label: 'Grade', value: 'Grade 1 target, screen agreed per contract' },
			{ label: 'Moisture', value: '12% maximum on green bean' },
			{ label: 'Packing', value: '60 kg GrainPro or jute, as contracted' },
			{ label: 'Indicative HS', value: '0901.11 green / 0901.21 roasted' }
		]
	},
	{
		id: 'whole-spices',
		name: 'Whole spices',
		summary: 'Pepper, clove, cinnamon, ginger, and turmeric as single items or a named mix.',
		image: '/media/spices.webp',
		alt: 'Pepper, cinnamon, clove, ginger, turmeric, and chili arranged on a table',
		width: 960,
		height: 640,
		specs: [
			{ label: 'Lead lot', value: 'Black pepper, ASTA or FAQ as contracted' },
			{ label: 'Moisture', value: '12% maximum for pepper' },
			{ label: 'Admixture', value: '1% maximum, unless the offer says otherwise' },
			{ label: 'Packing', value: '25 kg poly-lined bag' },
			{ label: 'Indicative HS', value: '0904.11 black pepper; other items per spice' }
		]
	},
	{
		id: 'coconut',
		name: 'Coconut',
		summary: 'Desiccated coconut from Indonesian origin, graded and packed for food manufacture.',
		image: '/media/coconut.webp',
		alt: 'Whole coconut beside two opened halves',
		width: 960,
		height: 640,
		specs: [
			{ label: 'Grade', value: 'Fine or medium, named on the offer' },
			{ label: 'Fat', value: '65% minimum for high-fat desiccated' },
			{ label: 'Moisture', value: '3% maximum' },
			{ label: 'Packing', value: '25 kg carton with inner liner' },
			{ label: 'Indicative HS', value: '0801.11' }
		]
	},
	{
		id: 'dried-spice-blend',
		name: 'Dried spice blend',
		summary: 'A culinary blend for food manufacturers. The recipe is locked on the specification sheet before packing.',
		image: '/media/ginger.webp',
		alt: 'Dried spice blend with seeds, herbs, and chili on a white background',
		width: 960,
		height: 960,
		specs: [
			{ label: 'Form', value: 'Dried mix, composition fixed per lot' },
			{ label: 'Moisture', value: '10% maximum' },
			{ label: 'Foreign matter', value: '0.5% maximum' },
			{ label: 'Packing', value: '20 kg carton' },
			{ label: 'Indicative HS', value: 'Classified to the contracted blend' }
		]
	}
];

export const markets = [
	{
		id: 'jp',
		code: 'JP',
		name: 'Japan',
		focus: 'Tight defect limits and lot samples that match the shipped container.'
	},
	{
		id: 'kr',
		code: 'KR',
		name: 'South Korea',
		focus: 'Food-grade packing and a certificate of origin ready for customs clearance.'
	},
	{
		id: 'sg',
		code: 'SG',
		name: 'Singapore',
		focus: 'Regional distribution lots, including LCL for a first trial.'
	},
	{
		id: 'my',
		code: 'MY',
		name: 'Malaysia',
		focus: 'Short-haul FOB or CIF into Port Klang, with a simple document set.'
	},
	{
		id: 'ae',
		code: 'AE',
		name: 'United Arab Emirates',
		focus: 'Re-export buyers who need clean commercial invoices and stable packing.'
	},
	{
		id: 'nl',
		code: 'NL',
		name: 'Netherlands',
		focus: 'European food importers asking for analysis when the contract requires it.'
	},
	{
		id: 'de',
		code: 'DE',
		name: 'Germany',
		focus: 'Specification-led buying, with the grade written before the vessel is booked.'
	},
	{
		id: 'us',
		code: 'US',
		name: 'United States',
		focus: 'Prior notice and food-facility details handled against the buyer’s broker instructions.'
	},
	{
		id: 'au',
		code: 'AU',
		name: 'Australia',
		focus: 'Biosecurity-sensitive cargo, shipped only with the certificates the route requires.'
	},
	{
		id: 'in',
		code: 'IN',
		name: 'India',
		focus: 'Bulk spice and coconut inquiries quoted against a named discharge port.'
	}
] as const;

export const steps = [
	{
		id: 'sourcing',
		index: '01',
		title: 'Sourcing',
		summary: 'Buy against a written specification.',
		detail:
			'Suppliers are checked against the buyer’s grade, crop, and packing before lots are aggregated. A lot that cannot meet the sheet is not offered.'
	},
	{
		id: 'quality',
		index: '02',
		title: 'Quality',
		summary: 'Sample the lot that will ship.',
		detail:
			'Moisture, defects, and foreign matter are checked at intake. Pre-shipment samples come from the contracted lot, not from a different season.'
	},
	{
		id: 'packing',
		index: '03',
		title: 'Packing',
		summary: 'Grade, pack, and mark the lot.',
		detail:
			'Cargo is packed for ocean freight. Lot numbers on the bags follow the packing list, so the receiver can tie a claim back to a specific unit.'
	},
	{
		id: 'documents',
		index: '04',
		title: 'Documents',
		summary: 'Build the export file with the cargo.',
		detail:
			'The commercial invoice, packing list, certificate of origin, and Indonesian export declaration (PEB) travel with the shipment. A phytosanitary certificate or certificate of analysis is added when the destination or the contract requires it.'
	},
	{
		id: 'shipping',
		index: '05',
		title: 'Shipping',
		summary: 'Hand over at the agreed point.',
		detail:
			'Cargo is delivered to the load port under the named incoterm. FOB transfers at the vessel. CFR and CIF include ocean freight, and CIF includes insurance.'
	}
] as const;

export const documents = [
	'Commercial invoice',
	'Packing list',
	'Bill of lading',
	'Certificate of origin (SKA)',
	'Pemberitahuan Ekspor Barang (PEB)',
	'Certificate of analysis, when contracted',
	'Phytosanitary certificate, when the destination requires it',
	'ISPM-15 mark for any wood packaging'
];

export const faqs = [
	{
		id: 'moq',
		question: 'What is the minimum order?',
		answer:
			'Trial orders can start from one pallet when the commodity and the packing allow it. Program business is quoted in 20-foot and 40-foot containers. The quantity on the signed proforma is the binding minimum.'
	},
	{
		id: 'payment',
		question: 'Which payment terms do you accept?',
		answer:
			'Telegraphic transfer (T/T) and irrevocable letters of credit at sight. The deposit, the balance, and the L/C conditions are written on the proforma before packing starts. We do not ship against an unsigned term.'
	},
	{
		id: 'incoterms',
		question: 'Which Incoterms do you offer?',
		answer:
			'FOB, CFR, and CIF are the standard offers. FCA is considered when the inland leg is clear. Every offer names the port. The Incoterm on the proforma is the one that governs the shipment.'
	},
	{
		id: 'papers',
		question: 'Which export documents come with the shipment?',
		answer:
			'Invoice, packing list, bill of lading, certificate of origin, and the Indonesian export declaration. Phytosanitary, fumigation, and analysis certificates are added when the buyer’s authority or the contract requires them.'
	},
	{
		id: 'lead-time',
		question: 'How long does a shipment take?',
		answer:
			'It depends on the commodity, the crop, and whether the lot is already in warehouse. The offer states a shipment window. There is no single lead time for every product.'
	},
	{
		id: 'samples',
		question: 'Can we receive a sample before the contract?',
		answer:
			'Yes, when stock of that grade is available. The sample is drawn from the lot we intend to ship. A library sample from another season is labeled as such, and it is not treated as the contract quality.'
	}
] as const;

export const notes = [
	{
		id: 'rotterdam',
		quote: 'The specification sheet matched the landed lot. That is why the second order was straightforward.',
		role: 'Procurement lead, specialty foods',
		place: 'Rotterdam'
	},
	{
		id: 'singapore',
		quote: 'The invoice, packing list, and bill of lading arrived together, so the letter of credit stayed clean.',
		role: 'Trade finance coordinator',
		place: 'Singapore'
	},
	{
		id: 'osaka',
		quote: 'We began with one pallet. The container that followed used the same grade and the same lot logic.',
		role: 'Buyer, food manufacturing',
		place: 'Osaka'
	}
] as const;

export const incoterms = ['FOB', 'CFR', 'CIF', 'FCA'] as const;

export type QuoteValues = {
	name: string;
	company: string;
	email: string;
	country: string;
	commodity: string;
	incoterm: string;
	message: string;
};

export type QuoteResult = {
	values?: QuoteValues;
	error?: string;
	success?: boolean;
};

export type NewsletterResult = {
	email?: string;
	error?: string;
	success?: boolean;
};

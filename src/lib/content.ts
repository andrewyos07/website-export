export const site = {
	name: 'PT Irene Bumi Sukapura',
	publicUrl: 'https://bumisukapura.com',
	title: 'Industrial Commodity Export | PT Irene Bumi Sukapura',
	description:
		'PT Irene Bumi Sukapura processes and exports Indonesian industrial commodities from East Java, with container dispatch through the Port of Tanjung Perak.',
	tagline: 'Industrial Commodity Processing & Export Supply',
	operations: 'Operations Base: East Java, Indonesia | Export Gateway: Port of Tanjung Perak (IDTPE)',
	summary:
		'PT Irene Bumi Sukapura is an integrated Indonesian supply operator and production facility for global industrial buyers.',
	email: 'info@bumisukapura.com',
	whatsapp: 'https://wa.me/6285190978383',
	whatsappDisplay: '+62 851-9097-8383',
	locality: 'Probolinggo & Sidoarjo',
	region: 'East Java, Indonesia'
};

export const nav = [
	{ id: 'top', label: 'Home' },
	{ id: 'infrastructure', label: 'Infrastructure' },
	{ id: 'products', label: 'Commodity Divisions' },
	{ id: 'capabilities', label: 'Capabilities' },
	{ id: 'contact', label: 'Contact' }
] as const;

export type Product = {
	id: string;
	name: string;
	summary: string;
	action: string;
	href: string;
	external: boolean;
	image: string;
	alt: string;
	width: number;
	height: number;
	mark?: boolean;
};

export const products: Product[] = [
	{
		id: 'plantation',
		name: 'Agro & Plantation Commodities',
		summary:
			'Direct extraction from our managed highland estates and contracted cultivation zones. We supply Arabica and Robusta coffee, Cocoa Beans, raw Cashew Nuts, Areca Nuts, and bulk Tapioca Starch. Every lot is processed, hulled, and graded precisely to your requested defect limits and moisture thresholds in our regional facilities.',
		action: 'Inquire Plantation Supply',
		href: '#contact',
		external: false,
		image: '/media/coffee.webp',
		alt: 'Roasted coffee beans filling the frame',
		width: 960,
		height: 732
	},
	{
		id: 'biomass',
		name: 'Biomass & Coconut Derivatives',
		summary:
			'Industrial-scale manufacturing of coconut substrates (cocopeat), Desiccated Coconut, and Virgin Coconut Oil (VCO). For the renewable energy sector, we manage the bulk consolidation of Palm Kernel Shells (PKS), Wood Pellets, and Coconut Charcoal Briquettes. We configure washing, aging, and compression parameters to match commercial requirements.',
		action: 'Inquire Biomass Supply',
		href: '#contact',
		external: false,
		image: '/media/coconut.webp',
		alt: 'Whole coconut beside two opened halves',
		width: 960,
		height: 640
	},
	{
		id: 'botanicals',
		name: 'Spices, Botanicals & Essential Oils',
		summary:
			'Bulk extraction and milling of premium Indonesian spices including Vanilla Beans, Nutmeg, Cardamom, Cloves, and Pepper. We also operate distillation supply lines for essential oils such as Patchouli and Citronella. All botanicals are mechanically sorted and extracted to achieve your mandated purity percentages.',
		action: 'Inquire Botanical Supply',
		href: '#contact',
		external: false,
		image: '/media/spices.webp',
		alt: 'Pepper, cinnamon, clove, ginger, turmeric, and chili arranged on a table',
		width: 960,
		height: 640
	},
	{
		id: 'marine',
		name: 'Marine & Natural Resins',
		summary:
			'Direct coastal and forestry extraction for industrial manufacturing. We supply dried Cottonii and Gracilaria Seaweed for global carrageenan extraction, alongside Damar Resin and Gum Copal for industrial coatings. Lots are processed and dehydrated to strict moisture controls before container stuffing.',
		action: 'Inquire Marine & Resin Supply',
		href: '#contact',
		external: false,
		image: '/media/warehouse.webp',
		alt: 'Export cargo staged for dispatch',
		width: 1100,
		height: 734
	},
	{
		id: 'custom',
		name: 'Custom Production & Contract Supply',
		summary:
			'Require specific Indonesian raw materials not listed above? Submit your Target Specification Sheet. We configure our procurement network and regional processing hubs to fulfill your custom volume allocations under full export compliance.',
		action: 'Consult Custom Supply (+62 851-9097-8383)',
		href: 'https://wa.me/6285190978383',
		external: true,
		image: '/brand/mark.png',
		alt: '',
		width: 184,
		height: 149,
		mark: true
	}
];

export const infrastructure = [
	{
		title: 'Direct Cultivation & Extraction',
		body: 'Active management of regional estates and formalized operational control over raw material extraction zones across the archipelago.'
	},
	{
		title: 'In-House Processing',
		body: 'Raw commodities bypass local spot markets and enter our regional facilities for mechanical sorting, washing, dehydration, and precise grading.'
	},
	{
		title: 'Internal Logistics Division',
		body: 'Container stuffing, palletizing, and export clearance are executed directly by our team at the Port of Tanjung Perak to ensure unbroken custody.'
	}
] as const;

export const markets = [
	{
		id: 'jp',
		code: 'JP',
		name: 'Japan',
		focus: 'Zero-defect sorting thresholds and strict pesticide residue verification.'
	},
	{
		id: 'kr',
		code: 'KR',
		name: 'South Korea',
		focus: 'Heavy metal and mycotoxin clearance complying with MFDS safety standards.'
	},
	{
		id: 'eu-us',
		code: 'EU/US',
		name: 'EU / US',
		focus: 'EUDR compliance tracking, FDA facility protocols, and stringent Ochratoxin A (OTA) management.'
	}
] as const;

export const steps = [
	{
		id: 'sourcing',
		index: '01',
		title: 'Sourcing',
		summary: 'Direct harvest from managed highland estates and contracted cultivation zones.'
	},
	{
		id: 'quality',
		index: '02',
		title: 'Processing & Quality',
		summary:
			'Mechanical sorting, washing, drying, and batch-specific laboratory testing executed at our East Java facilities.'
	},
	{
		id: 'packing',
		index: '03',
		title: 'Packing',
		summary:
			'Industrial packaging, including hermetic sealing, multi-ply craft bags, and high-density hydraulic compression.'
	},
	{
		id: 'documents',
		index: '04',
		title: 'Documents',
		summary:
			'Comprehensive export files built concurrently with cargo, including Phytosanitary, Surveyor Reports, and COO.'
	},
	{
		id: 'shipping',
		index: '05',
		title: 'Shipping',
		summary: 'Direct container transfer and handover at the Port of Tanjung Perak (IDTPE).'
	}
] as const;

export const faqs = [
	{
		id: 'moq',
		question: 'What is the minimum order?',
		answer:
			'Trial orders commence at 1 pallet where applicable. Standard commercial programs are allocated in 20-foot and 40-foot containers (FCL).'
	},
	{
		id: 'payment',
		question: 'Which payment terms do you accept?',
		answer:
			'We operate via secure bank-to-bank instruments: Irrevocable Letter of Credit (L/C) at sight or T/T with advance payment.'
	},
	{
		id: 'samples',
		question: 'Can we receive a sample before the contract?',
		answer:
			'Yes. Lab-verified production samples are dispatched internationally via courier prior to commercial contract signing.'
	}
] as const;

export const execution = [
	{
		title: 'Shipment size',
		value: 'FCL / LCL',
		desc: 'Palletized trials and Full Container Load stuffing controlled in-house.'
	},
	{
		title: 'Incoterms',
		value: 'FOB, CFR, CIF',
		desc: 'Origin loading at Port of Tanjung Perak, Surabaya.'
	},
	{
		title: 'Payment',
		value: 'L/C or T/T',
		desc: 'Irrevocable Letter of Credit at Sight and Telegraphic Transfer accepted.'
	},
	{
		title: 'Annual volume',
		value: 'Contract Allocations',
		desc: 'Quoted per commodity and crop year based on your requirement.'
	}
] as const;

export const incoterms = ['FOB', 'CFR', 'CIF'] as const;

export type QuoteValues = {
	name: string;
	company: string;
	email: string;
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

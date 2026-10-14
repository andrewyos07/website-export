export const site = {
	name: 'PT Irene Bumi Sukapura',
	publicUrl: 'https://bumisukapura.com',
	legalName: 'PT IRENE BUMI SUKAPURA',
	title: 'PT Irene Bumi Sukapura | Quality Starts at the Origin',
	description:
		'PT Irene Bumi Sukapura is an Indonesian processor and exporter of coffee, coconut derivatives, and fresh shallots.',
	tagline: 'Quality Starts at the Origin.',
	operations: 'Jl. A. Yani 152, Mangunharjo, Mayangan, Probolinggo 67217',
	summary:
		'PT Irene Bumi Sukapura is an Indonesian processor and exporter focused on coffee, coconut derivatives, and fresh shallots.',
	email: 'info@bumisukapura.com',
	whatsapp: 'https://wa.me/6285190978383',
	whatsappDisplay: '+62 851-9097-8383',
	director: 'Richa Irene Putri',
	nib: '2909260001434',
	taxId: '1000000011337965',
	address:
		'Jl. A. Yani 152, Mangunharjo, Mayangan, Probolinggo City 67217, East Java - Indonesia',
	gateways: 'Tanjung Perak (IDTPE) | Belawan (IDBLW) | Tanjung Priok (IDTPP) | Makassar (IDMAK)'
};

export const nav = [
	{ id: 'top', label: 'Home' },
	{ id: 'products', label: 'Products' },
	{ id: 'services', label: 'Services' },
	{ id: 'gallery', label: 'Gallery' },
	{ id: 'capabilities', label: 'Capabilities' },
	{ id: 'contact', label: 'Contact' }
] as const;

export const heroSlides = [
	{
		src: '/media/coffee-greenhouse.jpg',
		alt: 'Coffee cherries drying on tiered racks inside a greenhouse',
		width: 1498,
		height: 842,
		focus: 'center'
	},
	{
		src: '/media/coconut-bales.jpg',
		alt: 'Compressed coconut coir bales stacked for shipment',
		width: 1280,
		height: 634,
		focus: 'center'
	},
	{
		src: '/media/shallot-drying.jpg',
		alt: 'Shallots drying on raised bamboo racks',
		width: 960,
		height: 1280,
		focus: 'center bottom'
	},
	{
		src: '/media/container-load.jpg',
		alt: 'Mesh bags of shallots stacked inside an export container',
		width: 763,
		height: 1155,
		focus: 'center 40%'
	}
] as const;

export type Photo = {
	src: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
	focus: string;
};

const coffeePhotos: Photo[] = [
	{
		src: '/media/coffee-beds.jpg',
		alt: 'Coffee cherries drying on raised beds',
		caption: 'Cherries drying on raised beds.',
		width: 1200,
		height: 1600,
		focus: 'center 42%'
	},
	{
		src: '/media/coffee-greenhouse.jpg',
		alt: 'Coffee cherries drying on tiered racks inside a greenhouse',
		caption: 'Greenhouse drying before moisture is checked.',
		width: 1498,
		height: 842,
		focus: 'center'
	},
	{
		src: '/media/coffee-seedlings.jpg',
		alt: 'Coffee seedlings ready for planting',
		caption: 'Seedlings at a cultivation plot.',
		width: 1280,
		height: 748,
		focus: 'center'
	}
];

const coconutPhotos: Photo[] = [
	{
		src: '/media/coconut-shells.jpg',
		alt: 'Coconut shells piled at a processing yard',
		caption: 'Shells at the yard before fiber is separated.',
		width: 960,
		height: 1280,
		focus: 'center'
	},
	{
		src: '/media/coconut-coir.jpg',
		alt: 'Coconut coir piled under a processing shed',
		caption: 'Coir staged for substrate processing.',
		width: 960,
		height: 1280,
		focus: 'center 72%'
	},
	{
		src: '/media/coconut-bales.jpg',
		alt: 'Compressed coconut coir bales stacked for shipment',
		caption: 'Compressed bales ready for export.',
		width: 1280,
		height: 634,
		focus: 'center'
	}
];

const shallotPhotos: Photo[] = [
	{
		src: '/media/shallot-drying.jpg',
		alt: 'Shallots drying on raised bamboo racks',
		caption: 'Curing on raised racks.',
		width: 960,
		height: 1280,
		focus: 'center bottom'
	},
	{
		src: '/media/shallot-weighing.jpg',
		alt: 'Workers weighing a shallot harvest beside the field',
		caption: 'Weighing at the field before packing.',
		width: 960,
		height: 1280,
		focus: 'center 42%'
	},
	{
		src: '/media/container-load.jpg',
		alt: 'Mesh bags of shallots stacked inside an export container',
		caption: 'Export mesh bags loaded for dispatch.',
		width: 763,
		height: 1155,
		focus: 'center 40%'
	}
];

export type Product = {
	id: string;
	name: string;
	summary: string;
	specs?: string[];
	action: string;
	href: string;
	external: boolean;
	photos: Photo[];
};

export const products: Product[] = [
	{
		id: 'coffee',
		name: 'Coffee Beans (Arabica & Robusta)',
		summary:
			'We supply a reliable range of Indonesian coffee, from high-volume commercial beans to premium grades. Sourced directly from trusted highland farmers.',
		specs: [
			'Processing: Full Washed, Semi-Washed, Natural',
			'Origins: Sumatra, Java, Bali, Sulawesi',
			'Moisture: Strict quality control at Max 12.5%'
		],
		action: 'Contact on WhatsApp',
		href: site.whatsapp,
		external: true,
		photos: coffeePhotos
	},
	{
		id: 'coconut',
		name: 'Coconut Derivatives & Biomass',
		summary:
			'A comprehensive range of high-quality coconut products for horticulture and industrial manufacturing. We oversee the processing to ensure consistent volume and specs.',
		specs: [
			'Substrates: Cocopeat, Coco Husk & Coco Bristle',
			'Industrial & Feed: Coconut Oil (CNO) & Copra Meal',
			'Quality: Processed and graded to international standards'
		],
		action: 'Contact on WhatsApp',
		href: site.whatsapp,
		external: true,
		photos: coconutPhotos
	},
	{
		id: 'shallots',
		name: 'Fresh Red Shallots',
		summary:
			'Freshly harvested shallots directly from Probolinggo and Bima. We oversee the curing, grading, and packing process to guarantee export-ready quality.',
		specs: [
			'Size: 2.5 cm - 3.5 cm',
			'Condition: Clean, dry, and export-ready',
			'Packaging: 10kg - 20kg Mesh Bags'
		],
		action: 'Contact on WhatsApp',
		href: site.whatsapp,
		external: true,
		photos: shallotPhotos
	}
];

export const services = [
	{
		id: 'custom',
		title: 'Custom Sourcing',
		summary:
			'Looking for other Indonesian commodities like spices or botanicals? Tell us what you need. Through our trusted network, we will source and prepare it for you.'
	},
	{
		id: 'quality',
		title: 'Quality Control & Processing',
		summary:
			'We believe quality is built on the ground. We work closely with local facilities to oversee the sorting, moisture control, and packing processes before shipment.'
	},
	{
		id: 'consolidation',
		title: 'Export Consolidation',
		summary:
			'We make your importing process simple. Our team handles the port logistics, phytosanitary documents, and customs clearance so your cargo arrives safely.'
	}
] as const;

export const highlights = [
	{ id: 'coffee', name: 'Coffee', action: 'Contact on WhatsApp', photos: coffeePhotos },
	{ id: 'cocopeat', name: 'Coconut', action: 'Contact on WhatsApp', photos: coconutPhotos },
	{ id: 'produce', name: 'Fresh shallots', action: 'Contact on WhatsApp', photos: shallotPhotos }
] as const;

type Step = {
	id: string;
	index: string;
	title: string;
	summary: string;
	image?: string;
	alt?: string;
	width?: number;
	height?: number;
	focus?: string;
};

export const steps: Step[] = [
	{
		id: 'sourcing',
		index: '01',
		title: 'Sourcing',
		summary: 'We partner directly with local farmers to secure the best raw materials.',
		image: '/media/coffee-seedlings.jpg',
		alt: 'Coffee seedlings ready for planting',
		width: 1280,
		height: 748,
		focus: 'center'
	},
	{
		id: 'preparation',
		index: '02',
		title: 'Preparation',
		summary: 'We clean, sort, and process the goods to match your exact specifications.',
		image: '/media/shallot-weighing.jpg',
		alt: 'Workers weighing a shallot harvest beside the field',
		width: 960,
		height: 1280,
		focus: 'center 42%'
	},
	{
		id: 'packing',
		index: '03',
		title: 'Packing',
		summary: 'We use secure, export-standard packaging for safe international transit.',
		image: '/media/coconut-bales.jpg',
		alt: 'Compressed coconut coir bales stacked for shipment',
		width: 1280,
		height: 634,
		focus: 'center'
	},
	{
		id: 'shipping',
		index: '04',
		title: 'Shipping',
		summary:
			'We handle the logistics and dispatch from major Indonesian ports directly to your destination.',
		image: '/media/dispatch-truck.jpg',
		alt: 'Mesh bags loaded in a truck for dispatch',
		width: 963,
		height: 793,
		focus: 'center'
	}
];

export const faqs = [
	{
		id: 'payment',
		question: 'What are your payment terms?',
		answer:
			'We are flexible to support your business. We accept both Telegraphic Transfer (T/T) and Letter of Credit (L/C). We are happy to discuss the best payment option for your order.'
	},
	{
		id: 'samples',
		question: 'Can we request product samples?',
		answer:
			'Yes, we provide free product samples. Buyers only need to cover the international shipping cost (DHL/FedEx).'
	},
	{
		id: 'inspection',
		question: 'Do you allow third-party inspections?',
		answer:
			'Yes. You are welcome to appoint independent surveyors like SGS or Intertek to check the cargo before shipment.'
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
	locked?: boolean;
	simulated?: boolean;
};

export type NewsletterResult = {
	email?: string;
	error?: string;
	success?: boolean;
};

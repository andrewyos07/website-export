export const site = {
	name: 'PT Irene Bumi Sukapura',
	publicUrl: 'https://bumisukapura.com',
	legalName: 'PT IRENE BUMI SUKAPURA',
	title: 'Archipelago Sourcing | PT Irene Bumi Sukapura',
	description:
		'PT Irene Bumi Sukapura is an Indonesian export aggregator. We procure raw materials across the archipelago and verify quality on site before dispatch.',
	tagline: 'Verified Indonesian Commodity Sourcing',
	operations:
		'Export Sourcing & QC Aggregator | NIB: 2909260001434 | Tax ID: 1000000011337965',
	summary:
		'PT Irene Bumi Sukapura is an Indonesian export aggregator. We procure raw materials from prime cultivation zones and verify quality at the origin.',
	email: 'info@bumisukapura.com',
	whatsapp: 'https://wa.me/6285190978383',
	whatsappDisplay: '+62 851-9097-8383',
	director: 'Richa Irene Putri',
	nib: '2909260001434',
	taxId: '1000000011337965',
	address: 'Jl. Jendral A. Yani No. 152, Probolinggo 67217, East Java – Indonesia',
	gateways: 'Tanjung Perak (IDTPE) | Belawan (IDBLW) | Tanjung Priok (IDTPP) | Makassar (IDMAK)'
};

export const nav = [
	{ id: 'top', label: 'Home' },
	{ id: 'infrastructure', label: 'Framework' },
	{ id: 'products', label: 'Commodity Divisions' },
	{ id: 'capabilities', label: 'Capabilities' },
	{ id: 'contact', label: 'Contact' }
] as const;

export type Product = {
	id: string;
	name: string;
	summary: string;
	specs?: string[];
	action: string;
	href: string;
	external: boolean;
	image: string;
	alt: string;
	width: number;
	height: number;
	focus?: string;
	mark?: boolean;
};

export const products: Product[] = [
	{
		id: 'coffee',
		name: 'Coffee (Arabica & Robusta)',
		summary:
			"Sourced from Indonesia's most celebrated volcanic regions. We supply a comprehensive spectrum of coffee, ranging from premium specialty grades to high-volume commercial beans tailored for industrial roasters.",
		specs: [
			'Processing: Full Washed, Semi-Washed (Wet Hulled), Natural, Honey',
			'Grades: Premium Grade 1 down to High-Volume Commercial Grades',
			'Origins: Sumatra, Java, Bali, Sulawesi',
			'Moisture Range: 11% - 12.5%'
		],
		action: 'Request Coffee Catalog',
		href: site.whatsapp,
		external: true,
		image: '/media/coffee-beds.jpg',
		alt: 'Coffee cherries drying on raised beds',
		width: 1200,
		height: 1600,
		focus: 'center 42%'
	},
	{
		id: 'cocopeat',
		name: 'Coconut Substrates (Cocopeat)',
		summary:
			'Industrial-grade coconut husk derivatives configured for commercial horticulture and agriculture. Compacted into high-density blocks for massive logistics scalability.',
		specs: [
			'Block Format: 5kg Compressed Block',
			'EC Levels: High EC (> 0.5) & Low EC Hydroponic Grade (< 0.5)',
			'Moisture & pH: Moisture < 20% | pH 5.5 - 6.5',
			'Expansion: 70 - 80 Liters per block'
		],
		action: 'Request Substrate Specs',
		href: site.whatsapp,
		external: true,
		image: '/media/coconut-bales.jpg',
		alt: 'Compressed coconut coir bales stacked for shipment',
		width: 1280,
		height: 634,
		focus: 'center'
	},
	{
		id: 'spices',
		name: 'Whole Spices, Roots & Botanicals',
		summary:
			'Bulk extraction of premium Indonesian spices and rhizomes. Mechanically sorted at our regional facilities to achieve your mandated purity percentages.',
		specs: [
			'Core Items: Ginger (Dried/Fresh), Lal Pari Cloves, Black Pepper (500/550 GL), Vanilla',
			'Quality: Hand-Picked and FAQ (Fair Average Quality) Grades',
			'Moisture: Strict drying controls (Max 10-12% for dried spices)'
		],
		action: 'Request Spices Spec Sheet',
		href: site.whatsapp,
		external: true,
		image: '/media/spices.webp',
		alt: 'Pepper, cinnamon, clove, ginger, turmeric, and chili arranged on a table',
		width: 960,
		height: 640
	},
	{
		id: 'produce',
		name: 'Fresh Produce & Alliums',
		summary:
			"Procured directly from Indonesia's premium agricultural hubs. We oversee the curing, sorting, and export-grade packaging of fresh produce directly at the origin.",
		specs: [
			'Product: Fresh Red Shallots (Allium cepa var. aggregatum)',
			'Origins: Bima (Nusa Tenggara) and Probolinggo (East Java)',
			'Size Grading: 2.5 cm - 3.5 cm (Adjustable to target specs)',
			'Packaging: 10kg - 20kg Export Mesh Bags'
		],
		action: 'Request Fresh Produce Quote',
		href: site.whatsapp,
		external: true,
		image: '/media/shallot-drying.jpg',
		alt: 'Shallots drying on raised bamboo racks',
		width: 960,
		height: 1280,
		focus: 'center bottom'
	},
	{
		id: 'custom',
		name: 'On-Demand Custom Sourcing',
		summary:
			'Require specific Indonesian raw materials not listed above? Submit your Target Specification Sheet. From essential oils to industrial biomass, we can source, verify, and consolidate your cargo through our established network.',
		action: 'Consult Custom Supply',
		href: site.whatsapp,
		external: true,
		image: '/brand/mark.png',
		alt: '',
		width: 184,
		height: 149,
		mark: true
	}
];

export const highlights = [
	{
		id: 'coffee',
		name: 'Coffee',
		action: 'Request Coffee Catalog',
		photos: [
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
		]
	},
	{
		id: 'cocopeat',
		name: 'Cocopeat',
		action: 'Request Substrate Specs',
		photos: [
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
		]
	},
	{
		id: 'produce',
		name: 'Fresh shallots',
		action: 'Request Fresh Produce Quote',
		photos: [
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
		]
	}
] as const;

export const infrastructure = [
	{
		title: 'Archipelago Sourcing Network',
		body: 'Direct procurement access to audited local mills, estates, and agricultural cooperatives nationwide.'
	},
	{
		title: 'On-Site Quality Control',
		body: 'Our deployment team verifies moisture levels, defect counts, and grading parameters directly at the regional processing facilities.'
	},
	{
		title: 'Origin Port Dispatch',
		body: 'To maintain cargo integrity and reduce transit times, lots are containerized and dispatched from the nearest major international port.'
	}
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
		title: 'Transparent Sourcing',
		summary:
			'We match your target specifications with available production lots from our nationwide network.',
		image: '/media/coffee-seedlings.jpg',
		alt: 'Coffee seedlings ready for planting',
		width: 1280,
		height: 748,
		focus: 'center'
	},
	{
		id: 'verification',
		index: '02',
		title: 'On-Site Verification',
		summary:
			'Our deployment team and independent surveyors (SGS/Intertek) verify quality, quantity, and weight at the origin processing facility.',
		image: '/media/shallot-weighing.jpg',
		alt: 'Workers weighing a shallot harvest beside the field',
		width: 960,
		height: 1280,
		focus: 'center 42%'
	},
	{
		id: 'documents',
		index: '03',
		title: 'Export Documentation',
		summary:
			'We clear Phytosanitary, Fumigation, Certificate of Origin (COO), and Customs simultaneously with loading.',
		image: '/media/container-load.jpg',
		alt: 'Mesh bags of shallots stacked inside an export container',
		width: 763,
		height: 1155,
		focus: 'center 40%'
	},
	{
		id: 'payment',
		index: '04',
		title: 'Secure Payment',
		summary:
			'Transactions are executed via Irrevocable L/C at sight, ensuring funds are only released upon presentation of clean shipping documents.'
	}
];

export const faqs = [
	{
		id: 'payment',
		question: 'What are your payment terms?',
		answer:
			'We prioritize Irrevocable Letter of Credit (L/C) at sight from prime international banks. For initial trial orders (LCL), Telegraphic Transfer (T/T) can be discussed.'
	},
	{
		id: 'inspection',
		question: 'Can we use our own inspection agency?',
		answer:
			'Absolutely. We encourage buyers to appoint SGS, Intertek, or Cotecna for pre-shipment inspection at the loading port. The surveyor cost is borne by the buyer.'
	},
	{
		id: 'samples',
		question: 'Can we request samples before signing a contract?',
		answer:
			'Yes. Verified production samples are available. The sample material is complimentary; however, the international courier freight (DHL/FedEx) must be covered by the buyer.'
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

import { faqs, products, site } from '#lib/content.ts';

const schema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			name: site.name,
			url: site.publicUrl,
			email: site.email,
			logo: `${site.publicUrl}/brand/logo.webp`,
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Probolinggo and Sidoarjo',
				addressRegion: 'East Java',
				addressCountry: 'ID'
			}
		},
		{
			'@type': 'WebSite',
			name: site.name,
			url: site.publicUrl,
			description: site.description,
			inLanguage: 'en'
		},
		{
			'@type': 'ItemList',
			name: 'Export products',
			itemListElement: products.map((product, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: product.name,
				description: product.summary,
				url: `${site.publicUrl}/#products`
			}))
		},
		{
			'@type': 'FAQPage',
			mainEntity: faqs.map((faq) => ({
				'@type': 'Question',
				name: faq.question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: faq.answer
				}
			}))
		}
	]
};

export const jsonLd = JSON.stringify(schema).replaceAll('<', '\\u003c');

<script lang="ts">
	import { nav, site } from '#lib/content.ts';
	import Capabilities from '#lib/components/Capabilities.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import Gallery from '#lib/components/Gallery.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Header from '#lib/components/Header.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Products from '#lib/components/Products.svelte';
	import Services from '#lib/components/Services.svelte';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
	let menuOpen = $state(false);
	let active = $state('top');
	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 12;
		const marker = window.scrollY + 120;
		let current = 'top';
		for (const item of nav) {
			const section = document.getElementById(item.id);
			if (section && section.offsetTop <= marker) current = item.id;
		}
		active = current;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<link rel="canonical" href="{site.publicUrl}/" />
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content="{site.publicUrl}/" />
	<meta property="og:image" content="{site.publicUrl}/media/coffee-greenhouse.jpg" />
	<meta property="og:image:alt" content="Coffee cherries drying on tiered racks inside a greenhouse" />
	<meta property="og:image:width" content="1498" />
	<meta property="og:image:height" content="842" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content="{site.publicUrl}/media/coffee-greenhouse.jpg" />
	<link rel="preload" as="image" type="image/jpeg" href="/media/coffee-greenhouse.jpg" />
</svelte:head>

<svelte:window onscroll={onScroll} />

<div class="drawer max-w-full" {@attach onScroll}>
	<input id="nav-drawer" type="checkbox" class="drawer-toggle" bind:checked={menuOpen} />
	<div class="drawer-content">
		<Header {active} {scrolled} {closeMenu} />
		<main id="main">
			<Hero />
			<Products />
			<Services />
			<Gallery />
			<Capabilities />
			<Contact result={form?.quote ?? null} sent={data.inquirySent} local={data.inquiryLocal} />
			<Faq />
		</main>
		<Footer />
	</div>
	<div class="drawer-side">
		<label for="nav-drawer" aria-label="Close menu" class="drawer-overlay"></label>
		<ul id="mobile-nav" class="menu min-h-full w-80 gap-1 bg-base-100 p-6 text-base-content">
			<li class="menu-title px-2 pt-2">{site.name}</li>
			{#each nav as item (item.id)}
				<li>
					<a
						href="#{item.id}"
						aria-current={active === item.id ? 'true' : undefined}
						onclick={closeMenu}
					>
						{item.label}
					</a>
				</li>
			{/each}
			<li class="mt-4">
				<a href="#contact" class="btn btn-secondary" onclick={closeMenu}>Contact Us</a>
			</li>
		</ul>
	</div>
</div>

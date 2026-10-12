<script lang="ts">
	import { nav, site } from '#lib/content.ts';
	import About from '#lib/components/About.svelte';
	import Capabilities from '#lib/components/Capabilities.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Header from '#lib/components/Header.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Markets from '#lib/components/Markets.svelte';
	import Products from '#lib/components/Products.svelte';
	import Proof from '#lib/components/Proof.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
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
	<meta property="og:image" content="{site.publicUrl}/media/hero-og.jpg" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content="{site.publicUrl}/media/hero-og.jpg" />
	<link
		rel="preload"
		as="image"
		type="image/webp"
		href="/media/hero-720.webp"
		imagesrcset="/media/hero-720.webp 720w, /media/hero-port.webp 1200w"
		imagesizes="(min-width: 64rem) 36rem, calc(100vw - 3rem)"
	/>
</svelte:head>

<svelte:window onscroll={onScroll} />

<div class="drawer max-w-full" {@attach onScroll}>
	<input id="nav-drawer" type="checkbox" class="drawer-toggle" bind:checked={menuOpen} />
	<div class="drawer-content">
		<Header {active} {scrolled} {closeMenu} />
		<main id="main">
			<Hero />
			<About />
			<Products />
			<Capabilities />
			<Proof />
			<Markets />
			<Faq />
			<Contact result={form?.quote ?? null} />
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
				<a href="#contact" class="btn btn-secondary" onclick={closeMenu}>Request Supply Allocation</a>
			</li>
		</ul>
	</div>
</div>

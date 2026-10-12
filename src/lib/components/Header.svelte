<script lang="ts">
	import { nav, site } from '#lib/content.ts';

	let {
		active,
		scrolled,
		closeMenu
	}: {
		active: string;
		scrolled: boolean;
		closeMenu: () => void;
	} = $props();
</script>

<header
	class={['sticky top-0 z-40 border-b bg-base-100/95 backdrop-blur', scrolled ? 'border-base-300' : 'border-transparent']}
>
	<div class="bg-neutral text-neutral-content">
		<div class="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-[0.7rem] leading-snug sm:flex-row sm:items-center sm:justify-between sm:text-xs md:px-6">
			<p>{site.operations}</p>
			<p class="flex flex-wrap gap-x-3">
				<a class="underline-offset-2 hover:underline" href="mailto:{site.email}">Email: {site.email}</a>
				<a class="underline-offset-2 hover:underline" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
					WA: {site.whatsappDisplay}
				</a>
			</p>
		</div>
	</div>
	<div class="navbar mx-auto min-h-20 max-w-6xl px-4 md:px-6">
		<div class="site-nav">
			<label
				for="nav-drawer"
				class="btn btn-ghost btn-square shrink-0 lg:hidden"
				aria-label="Open menu"
			>
				<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
					<path d="M3 6h16M3 11h16M3 16h16" fill="none" stroke="currentColor" stroke-width="1.6" />
				</svg>
			</label>
			<a href="#top" class="inline-flex min-w-0 shrink flex-col justify-center" onclick={closeMenu}>
				<img
					src="/brand/logo.webp"
					alt={site.name}
					width="336"
					height="114"
					class="h-8 w-auto sm:h-10"
				/>
			</a>
			<ul class="desktop-nav menu menu-horizontal mx-auto gap-1 px-1 text-sm">
				{#each nav as item (item.id)}
					<li>
						<a
							href="#{item.id}"
							aria-current={active === item.id ? 'true' : undefined}
							class={active === item.id ? 'menu-active' : undefined}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
			<a href="#contact" class="nav-cta btn btn-sm sm:btn-md">
				<span class="quote-short">Request</span>
				<span class="quote-long">Request Supply Allocation</span>
			</a>
		</div>
	</div>
</header>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	let {
		count,
		label,
		children,
		interval = 5000,
		class: className = ''
	}: {
		count: number;
		label: string;
		children: Snippet<[number, Snippet]>;
		interval?: number;
		class?: string;
	} = $props();

	let index = $state(0);
	let hovered = $state(false);
	let keyboardFocus = $state(false);
	let dots = $derived(Array.from({ length: count }, (_, item) => item));
	let timer: number | undefined;
	let autoplay = false;

	function restart() {
		window.clearInterval(timer);
		if (!autoplay) return;
		timer = window.setInterval(() => {
			if (!hovered && !keyboardFocus && document.visibilityState === 'visible') {
				index = (index + 1) % count;
			}
		}, interval);
	}

	function go(next: number) {
		index = (next + count) % count;
		restart();
	}

	onMount(() => {
		autoplay = count > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		restart();
		return () => window.clearInterval(timer);
	});
</script>

{#snippet arrows()}
	<button
		type="button"
		class="btn btn-circle absolute top-1/2 left-3 z-10 -translate-y-1/2 border-0 bg-base-100/85 shadow-md hover:bg-base-100"
		aria-label="Previous slide"
		onclick={() => go(index - 1)}
	>
		<svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
			<path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
	<button
		type="button"
		class="btn btn-circle absolute top-1/2 right-3 z-10 -translate-y-1/2 border-0 bg-base-100/85 shadow-md hover:bg-base-100"
		aria-label="Next slide"
		onclick={() => go(index + 1)}
	>
		<svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
			<path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
{/snippet}

<div
	class={['flex w-full min-w-0 flex-col', className]}
	role="region"
	aria-roledescription="carousel"
	aria-label={label}
	onpointerenter={(event) => {
		if (event.pointerType === 'mouse') hovered = true;
	}}
	onpointerleave={() => (hovered = false)}
	onfocusin={(event) => {
		keyboardFocus = event.target instanceof Element && event.target.matches(':focus-visible');
	}}
	onfocusout={(event) => {
		const next = event.relatedTarget;
		if (!(next instanceof Node) || !event.currentTarget.contains(next)) keyboardFocus = false;
	}}
>
	{@render children(index, arrows)}
	<div class="mt-4 flex justify-center gap-1">
		{#each dots as dot (dot)}
			<button
				type="button"
				class="grid size-8 place-items-center rounded-full"
				aria-label="Show slide {dot + 1} of {count}"
				aria-current={dot === index ? 'true' : undefined}
				onclick={() => go(dot)}
			>
				<span
					class={[
						'size-3.5 rounded-full border-2',
						dot === index ? 'border-neutral bg-neutral' : 'border-base-content bg-base-content/55'
					]}
				></span>
			</button>
		{/each}
	</div>
</div>

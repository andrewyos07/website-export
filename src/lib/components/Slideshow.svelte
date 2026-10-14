<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	let {
		count,
		label,
		children,
		interval = 5000,
		delay = 0,
		compact = false,
		class: className = ''
	}: {
		count: number;
		label: string;
		children: Snippet<[number, Snippet]>;
		interval?: number;
		delay?: number;
		compact?: boolean;
		class?: string;
	} = $props();

	let index = $state(0);
	let hovered = $state(false);
	let keyboardFocus = $state(false);
	let dots = $derived(Array.from({ length: count }, (_, item) => item));
	let timer: number | undefined;
	let autoplay = false;

	function advance() {
		if (!hovered && !keyboardFocus && document.visibilityState === 'visible') {
			index = (index + 1) % count;
		}
	}

	function stop() {
		window.clearTimeout(timer);
		window.clearInterval(timer);
	}

	function restart(first = interval) {
		stop();
		if (!autoplay) return;
		timer = window.setTimeout(() => {
			advance();
			timer = window.setInterval(advance, interval);
		}, first);
	}

	function go(next: number) {
		index = (next + count) % count;
		restart();
	}

	onMount(() => {
		autoplay = count > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		restart(interval + delay);
		return stop;
	});
</script>

{#snippet dotList()}
	{#each dots as dot (dot)}
		<button
			type="button"
			class={['grid place-items-center rounded-full', compact ? 'size-6' : 'size-8']}
			aria-label="Show slide {dot + 1} of {count}"
			aria-current={dot === index ? 'true' : undefined}
			onclick={() => go(dot)}
		>
			<span
				class={[
					'rounded-full border-2',
					compact ? 'size-2.5' : 'size-3.5',
					compact
						? dot === index
							? 'border-base-100 bg-base-100'
							: 'border-base-100 bg-base-100/30'
						: dot === index
							? 'border-neutral bg-neutral'
							: 'border-base-content bg-base-content/55'
				]}
			></span>
		</button>
	{/each}
{/snippet}

{#snippet arrows()}
	<button
		type="button"
		class={[
			'btn btn-circle absolute top-1/2 z-10 -translate-y-1/2 border-0 bg-base-100/85 shadow-md hover:bg-base-100',
			compact ? 'btn-sm left-2' : 'left-3'
		]}
		aria-label="Previous slide"
		onclick={() => go(index - 1)}
	>
		<svg viewBox="0 0 24 24" class={compact ? 'size-4' : 'size-5'} fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
			<path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
	<button
		type="button"
		class={[
			'btn btn-circle absolute top-1/2 z-10 -translate-y-1/2 border-0 bg-base-100/85 shadow-md hover:bg-base-100',
			compact ? 'btn-sm right-2' : 'right-3'
		]}
		aria-label="Next slide"
		onclick={() => go(index + 1)}
	>
		<svg viewBox="0 0 24 24" class={compact ? 'size-4' : 'size-5'} fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
			<path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
	{#if compact}
		<div class="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 rounded-full bg-neutral/45 px-1">
			{@render dotList()}
		</div>
	{/if}
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
	{#if !compact}
		<div class="mt-4 flex justify-center gap-1">
			{@render dotList()}
		</div>
	{/if}
</div>

<script lang="ts">
	import { steps } from '#lib/content.ts';

	let activeId = $state<string>(steps[0].id);
	let active = $derived(steps.find((step) => step.id === activeId) ?? steps[0]);
	let trackNode: HTMLElement | undefined;

	function stepIndex(progress: number) {
		const last = steps.length - 1;
		return Math.min(last, Math.max(0, Math.floor(progress * steps.length)));
	}

	function pinned() {
		return window.matchMedia('(min-width: 64rem)').matches;
	}

	function sync(node: HTMLElement) {
		if (!pinned()) return;
		const start = node.getBoundingClientRect().top + window.scrollY;
		const travel = Math.max(node.offsetHeight - window.innerHeight, 1);
		const progress = (window.scrollY - start) / travel;
		activeId = steps[stepIndex(progress)].id;
	}

	function track(node: HTMLElement) {
		trackNode = node;
		sync(node);
		const onScroll = () => sync(node);
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	}

	function showStep(index: number) {
		const node = trackNode;
		if (!node) return;
		if (!pinned()) {
			activeId = steps[index].id;
			return;
		}
		const start = node.getBoundingClientRect().top + window.scrollY;
		const travel = Math.max(node.offsetHeight - window.innerHeight, 1);
		const top = start + (travel * (index + 0.12)) / steps.length;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
	}
</script>

<section id="capabilities" class="bg-base-200 px-6 pt-24 pb-8 lg:pt-32" aria-labelledby="capabilities-title">
	<div class="mx-auto max-w-6xl">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Capabilities</p>
		<h2 id="capabilities-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			Production to Port: Unbroken Custody.
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">
			Every export lot is processed, tested, and containerized under our direct operational control.
		</p>
	</div>
</section>

<div class="cap-track bg-base-200 px-6" style:--steps={steps.length} {@attach track}>
	<div class="cap-pin mx-auto grid w-full max-w-6xl items-start gap-10 lg:items-center lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
		<ol class="m-0 list-none p-0">
			{#each steps as step, index (step.id)}
				<li class="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4">
					<div class="relative flex items-center justify-center py-2">
						{#if index > 0}
							<span class="absolute top-0 bottom-1/2 left-1/2 w-0.5 -translate-x-1/2 bg-base-content/25" aria-hidden="true"></span>
						{/if}
						{#if index < steps.length - 1}
							<span class="absolute top-1/2 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-base-content/25" aria-hidden="true"></span>
						{/if}
						<button
							type="button"
							class={[
								'btn btn-circle relative z-10',
								activeId === step.id ? 'btn-neutral' : 'border border-base-300 bg-base-100'
							]}
							aria-current={activeId === step.id ? 'step' : undefined}
							aria-pressed={activeId === step.id}
							aria-label={`${step.index} ${step.title}`}
							onclick={() => showStep(index)}
						>
							{step.index}
						</button>
					</div>
					<div
						class={[
							'my-2 rounded-box border bg-base-100 px-4 py-3 transition-colors duration-300',
							activeId === step.id ? 'border-base-content/25' : 'border-base-300'
						]}
					>
						<p class="font-medium">{step.title}</p>
						<p class="text-sm text-base-content/70">{step.summary}</p>
					</div>
				</li>
			{/each}
		</ol>

		<div class="hidden rounded-box bg-neutral p-8 text-neutral-content md:p-10 lg:block" aria-live="polite" aria-atomic="true">
			{#key active.id}
				<div class="cap-detail">
					<p class="text-xs font-medium tracking-[0.18em] text-secondary uppercase">{active.index}</p>
					<h3 class="font-display mt-3 text-3xl">{active.title}</h3>
					<p class="mt-4 leading-relaxed text-neutral-content/85">{active.summary}</p>
				</div>
			{/key}
		</div>
	</div>
</div>

<style>
	.cap-track {
		height: auto;
	}

	.cap-pin {
		position: static;
	}

	@media (min-width: 64rem) {
		.cap-track {
			height: calc(var(--steps) * 72vh);
		}

		.cap-pin {
			position: sticky;
			top: 8rem;
			min-height: calc(100svh - 8rem);
		}
	}

	.cap-detail {
		animation: cap-in 0.55s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes cap-in {
		from {
			opacity: 0;
			transform: translateY(0.75rem);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cap-detail {
			animation: none;
		}
	}
</style>

<script lang="ts">
	import { markets } from '#lib/content.ts';

	let activeId = $state<string>(markets[0].id);
	let active = $derived(markets.find((market) => market.id === activeId) ?? markets[0]);
</script>

{#snippet marks()}
	{#each markets as market (market.id)}
		<span class="font-display text-lg whitespace-nowrap text-base-content/70">
			{market.code}
			<span class="px-3 text-secondary">/</span>
			{market.name}
		</span>
	{/each}
{/snippet}

<section class="bg-base-200 py-16" aria-labelledby="markets-title">
	<div class="ticker w-full max-w-full overflow-hidden border-y border-base-300 py-4" aria-hidden="true">
		<div class="ticker-track flex w-max gap-10 px-6">
			{@render marks()}
			{@render marks()}
		</div>
	</div>

	<div class="rise-view mx-auto max-w-6xl px-6 pt-16">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Markets</p>
		<h2 id="markets-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			Destination Compliance.
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">
			We align post-harvest processing and chemical thresholds with the biosecurity frameworks of global
			destination ports.
		</p>

		<div class="carousel carousel-center mt-10 w-full gap-3 pb-2">
			{#each markets as market (market.id)}
				<div class="carousel-item">
					<button
						type="button"
						class={[
							'btn h-auto min-h-24 w-40 flex-col gap-1 border border-base-300 bg-base-100 whitespace-normal',
							activeId === market.id && 'border-neutral bg-neutral text-neutral-content'
						]}
						aria-pressed={activeId === market.id}
						onclick={() => (activeId = market.id)}
					>
						<span class="font-display text-3xl">{market.code}</span>
						<span class="text-xs tracking-wide">{market.name}</span>
					</button>
				</div>
			{/each}
		</div>

		<div class="mt-8 max-w-2xl border-l-2 border-secondary pl-5" aria-live="polite">
			<p class="font-display text-2xl">{active.name}</p>
			<p class="mt-2 text-base-content/80">{active.focus}</p>
		</div>
	</div>
</section>

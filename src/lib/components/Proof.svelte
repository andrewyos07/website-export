<script lang="ts">
	import { execution } from '#lib/content.ts';
</script>

<section class="bg-base-100 py-24 lg:py-32" aria-labelledby="proof-title">
	<div class="rise-view mx-auto max-w-6xl px-6">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Execution</p>
		<h2 id="proof-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			Verifiable Industrial Execution.
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">
			Standardized commercial terms executed directly from our East Java production facilities.
		</p>

		<div class="stats stats-vertical mt-12 w-full border border-base-300 bg-base-200 shadow-none md:stats-horizontal">
			{#each execution as stat (stat.title)}
				<div class="stat">
					<div class="stat-title">{stat.title}</div>
					<div class="stat-value font-display text-2xl md:text-3xl">{stat.value}</div>
					<div class="stat-desc whitespace-normal">{stat.desc}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

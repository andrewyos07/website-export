<script lang="ts">
	import { notes } from '#lib/content.ts';

	const stats = [
		{ title: 'Shipment size', value: 'FCL / LCL', desc: 'Pallet trials through 40-foot containers' },
		{ title: 'Incoterms', value: 'FOB · CFR · CIF', desc: 'The named port is on the proforma' },
		{ title: 'Payment', value: 'L/C · T/T', desc: 'Sight L/C or telegraphic transfer' },
		{ title: 'Annual volume', value: 'On request', desc: 'Quoted per commodity and crop year' }
	];
</script>

<section class="bg-base-200 py-24 lg:py-32" aria-labelledby="proof-title">
	<div class="rise-view mx-auto max-w-6xl px-6">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Proof</p>
		<h2 id="proof-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			What a buyer can verify.
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">
			Commercial terms are published. Tonnage is not, because a serious offer is per commodity and per
			crop. The notes below are sample buyer perspectives for this preview and must be replaced with
			verified references before launch.
		</p>

		<div class="stats stats-vertical mt-12 w-full border border-base-300 bg-base-100 shadow-none md:stats-horizontal">
			{#each stats as stat (stat.title)}
				<div class="stat">
					<div class="stat-title">{stat.title}</div>
					<div class="stat-value font-display text-2xl md:text-3xl">{stat.value}</div>
					<div class="stat-desc">{stat.desc}</div>
				</div>
			{/each}
		</div>

		<ul class="mt-12 grid gap-6 lg:grid-cols-3">
			{#each notes as note (note.id)}
				<li class="rounded-box border border-base-300 bg-base-100 p-6">
					<blockquote>
						<p class="font-display text-xl leading-snug">“{note.quote}”</p>
						<footer class="mt-6 text-sm text-base-content/70">
							{note.role}
							<span class="px-1" aria-hidden="true">·</span>
							{note.place}
						</footer>
					</blockquote>
				</li>
			{/each}
		</ul>
	</div>
</section>

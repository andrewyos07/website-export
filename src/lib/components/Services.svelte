<script lang="ts">
	import { services } from '#lib/content.ts';
</script>

<section id="services" class="bg-base-200 py-24 lg:py-32" aria-labelledby="services-title">
	<div class="mx-auto max-w-6xl px-6">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Services</p>
		<h2 id="services-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			Our Services
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">Dependable solutions beyond our core products.</p>
		<ul class="mt-12 grid gap-6 lg:grid-cols-3">
			{#each services as service (service.id)}
				<li>
					<article class="card h-full border border-base-300 bg-base-100">
						<div class="card-body">
							<h3 class="card-title font-display text-2xl">{service.title}</h3>
							<p class="text-base-content/75">{service.summary}</p>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>

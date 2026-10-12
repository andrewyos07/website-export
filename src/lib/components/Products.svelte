<script lang="ts">
	import { products } from '#lib/content.ts';
</script>

<section id="products" class="bg-base-100 py-24 lg:py-32" aria-labelledby="products-title">
	<div class="rise-view mx-auto max-w-6xl px-6">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Commodity divisions</p>
		<h2 id="products-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			Industrial Supply, Tailored to Your Specifications.
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">
			We process and export diverse Indonesian commodities based on your exact laboratory and physical
			requirements.
		</p>

		<ul class="mt-12 grid gap-8 sm:grid-cols-2">
			{#each products as product (product.id)}
				<li class={product.id === 'custom' ? 'sm:col-span-2' : undefined}>
					<article class="card h-full border border-base-300 bg-base-100 transition duration-300 hover:-translate-y-1">
						{#if product.mark}
							<figure class="grid aspect-[4/3] place-items-center bg-white sm:aspect-[8/3]">
								<img
									src={product.image}
									alt={product.alt}
									width={product.width}
									height={product.height}
									loading="lazy"
									decoding="async"
									fetchpriority="low"
									class="w-36"
								/>
							</figure>
						{:else}
							<figure>
								<img
									src={product.image}
									alt={product.alt}
									width={product.width}
									height={product.height}
									loading="lazy"
									decoding="async"
									fetchpriority="low"
									class="aspect-[4/3] w-full object-cover"
								/>
							</figure>
						{/if}
						<div class="card-body">
							<h3 class="card-title font-display text-2xl">{product.name}</h3>
							<p class="text-base-content/75">{product.summary}</p>
							<div class="card-actions mt-2">
								<a
									class="btn h-auto min-h-12 whitespace-normal text-center"
									href={product.href}
									target={product.external ? '_blank' : undefined}
									rel={product.external ? 'noopener noreferrer' : undefined}
								>
									{product.action}
								</a>
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>

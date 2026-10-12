<script lang="ts">
	import { products, site } from '#lib/content.ts';
</script>

<section id="products" class="bg-base-100 py-24 lg:py-32" aria-labelledby="products-title">
	<div class="rise-view mx-auto max-w-6xl px-6">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Products</p>
		<h2 id="products-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			Flagship lots, with the specification in view.
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">
			Figures below are typical offer specifications. The proforma invoice is the binding sheet for a
			given lot.
		</p>

		<ul class="mt-12 grid gap-8 sm:grid-cols-2">
			{#each products as product (product.id)}
				<li>
					<article class="card h-full border border-base-300 bg-base-100 transition duration-300 hover:-translate-y-1">
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
						<div class="card-body">
							<h3 class="card-title font-display text-2xl">{product.name}</h3>
							<p class="text-base-content/75">{product.summary}</p>
							<div class="card-actions mt-2">
								<a class="btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
									Request on WhatsApp
								</a>
							</div>
						</div>
					</article>
				</li>
			{/each}
			<li>
				<article class="card h-full border border-base-300 bg-base-100 transition duration-300 hover:-translate-y-1">
					<figure class="grid aspect-[4/3] place-items-center bg-white">
						<img src="/brand/mark.png" alt="" width="184" height="149" loading="lazy" decoding="async" fetchpriority="low" class="w-36" />
					</figure>
					<div class="card-body">
						<h3 class="card-title font-display text-2xl">Custom commodity</h3>
						<p class="text-base-content/75">
							A product that is not listed here, quoted against the specification you send.
						</p>
						<div class="card-actions mt-2">
							<a class="btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
								Request on WhatsApp
							</a>
						</div>
					</div>
				</article>
			</li>
		</ul>
	</div>
</section>

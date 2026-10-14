<script lang="ts">
	import { products } from '#lib/content.ts';
	import Slideshow from '#lib/components/Slideshow.svelte';
</script>

<section id="products" class="bg-base-100 py-24 lg:py-32" aria-labelledby="products-title">
	<div class="mx-auto max-w-6xl px-6">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Products</p>
		<h2 id="products-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			Our Products
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">Carefully sourced and prepared for international markets.</p>

		<div class="mt-12">
			<Slideshow count={products.length} label="Products">
				{#snippet children(index, arrows)}
					<div class="grid w-full min-w-0">
						<div
							class="pointer-events-none relative z-10 col-start-1 row-start-1 aspect-[4/3] w-full self-start lg:w-1/2 [&>button]:pointer-events-auto"
						>
							{@render arrows()}
						</div>
						{#each products as product, productIndex (product.id)}
							<article
								class={[
									'card col-start-1 row-start-1 w-full min-w-0 border border-base-300 bg-base-100 lg:card-side',
									productIndex === index ? '' : 'invisible'
								]}
								inert={productIndex !== index}
							>
								<figure class="relative aspect-[4/3] w-full self-start overflow-hidden lg:w-1/2">
									<img
										src={product.image}
										alt={product.alt}
										width={product.width}
										height={product.height}
										loading="lazy"
										decoding="async"
										class="absolute inset-0 size-full object-cover"
										style:object-position={product.focus ?? 'center'}
									/>
								</figure>
								<div class="card-body lg:w-1/2">
									<h3 class="card-title font-display text-3xl">{product.name}</h3>
									<p class="grow-0 text-base-content/75">{product.summary}</p>
									{#if product.specs}
										<ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-base-content/80">
											{#each product.specs as spec (spec)}
												<li>{spec}</li>
											{/each}
										</ul>
									{/if}
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
						{/each}
					</div>
				{/snippet}
			</Slideshow>
		</div>
	</div>
</section>

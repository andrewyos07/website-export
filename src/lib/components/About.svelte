<script lang="ts">
	import { infrastructure } from '#lib/content.ts';
</script>

<section id="infrastructure" class="bg-base-200 py-24 lg:py-32" aria-labelledby="infrastructure-title">
	<div class="rise-view mx-auto grid max-w-6xl items-start gap-16 px-6 lg:grid-cols-2">
		<div>
			<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Our operational framework</p>
			<h2 id="infrastructure-title" class="font-display mt-4 text-4xl text-balance md:text-5xl">
				Direct from Origin. Verified at the Source.
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-base-content/80">
				We specialize in navigating the complexities of the Indonesian commodity market. We do not rely on
				blind trust. For origin-specific commodities across Sumatra, Java, Bali, Sulawesi, and Nusa
				Tenggara, our inspection taskforce deploys directly to the source. We personally oversee the
				mechanical sorting, laboratory sampling, and container stuffing at regional facilities before
				dispatching from Indonesia's major export gateways.
			</p>
			<ul class="mt-8 space-y-4">
				{#each infrastructure as point (point.title)}
					<li class="border-t border-base-300 pt-4">
						<p class="font-medium">{point.title}</p>
						<p class="mt-1 text-base-content/75">{point.body}</p>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<figure>
				<img
					src="/media/container-load.jpg"
					alt="Mesh bags of shallots stacked to the roof of an export container"
					width="763"
					height="1155"
					loading="lazy"
					decoding="async"
					fetchpriority="low"
					class="aspect-[4/3] w-full rounded-box object-cover object-[62%_38%]"
				/>
				<figcaption class="mt-3 text-sm text-base-content/70">
					Lots containerized at the origin before dispatch.
				</figcaption>
			</figure>
		</div>
	</div>
</section>

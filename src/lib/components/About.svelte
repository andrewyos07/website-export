<script lang="ts">
	import { infrastructure } from '#lib/content.ts';
</script>

<section id="infrastructure" class="bg-base-200 py-24 lg:py-32" aria-labelledby="infrastructure-title">
	<div class="rise-view mx-auto grid max-w-6xl items-start gap-16 px-6 lg:grid-cols-2">
		<div>
			<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">About our infrastructure</p>
			<h2 id="infrastructure-title" class="font-display mt-4 text-4xl text-balance md:text-5xl">
				Vertically Integrated. Zero Intermediaries.
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-base-content/80">
				We are a physical supply operator. By maintaining active agricultural operations and utilizing
				regional post-harvest processing hubs in East Java, PT Irene Bumi Sukapura dictates the physical
				grading, moisture levels, and purity of every metric ton we ship. Our infrastructure guarantees
				industrial buyers a secure, scalable, and fully traceable supply line directly out of Indonesia.
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
					src="/media/warehouse.webp"
					alt="Export cargo staged for dispatch"
					width="1100"
					height="734"
					loading="lazy"
					decoding="async"
					fetchpriority="low"
					class="aspect-[4/3] w-full rounded-box object-cover"
				/>
				<figcaption class="mt-3 text-sm text-base-content/70">
					Export staging and palletizing at our East Java facility.
				</figcaption>
			</figure>
		</div>
	</div>
</section>

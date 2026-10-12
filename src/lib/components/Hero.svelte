<script lang="ts">
	import { site } from '#lib/content.ts';
</script>

<section id="top" class="hero min-h-[calc(100svh-5rem)] bg-base-100">
	<div class="hero-content hero-split px-6 py-16 lg:py-28">
		<div class="hero-copy w-full min-w-0 max-w-xl">
			<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Indonesia to global buyers</p>
			<h1 class="font-display mt-5 max-w-full text-4xl leading-tight text-base-content sm:text-5xl lg:text-6xl">
				Quality commodities from Indonesia, shipped across the world.
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-base-content/80">
				PT Irene Bumi Sukapura prepares export lots for importers who need a written specification, a
				complete document file, and a handover they can trace from origin to port.
			</p>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a href={site.whatsapp} class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Inquire Now</a>
				<a href="#products" class="btn btn-lg">View products</a>
			</div>
		</div>
		<figure class="relative w-full min-w-0 max-w-xl">
			<img
				src="/brand/mark.png"
				alt=""
				width="184"
				height="149"
				loading="lazy"
				decoding="async"
				class="mark-drift pointer-events-none absolute -top-8 -left-4 hidden w-20 opacity-90 sm:block"
			/>
			<img
				src="/media/hero-720.webp"
				srcset="/media/hero-720.webp 720w, /media/hero-port.webp 1200w"
				sizes="(min-width: 64rem) 36rem, calc(100vw - 3rem)"
				alt="Aerial view of a container terminal with gantry cranes and stacked freight"
				width="1200"
				height="800"
				fetchpriority="high"
				decoding="async"
				class="block aspect-[4/3] h-auto w-full rounded-box bg-base-300 object-cover"
			/>
		</figure>
	</div>
</section>

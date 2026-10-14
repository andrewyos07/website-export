<script lang="ts">
	import { heroSlides } from '#lib/content.ts';
	import Slideshow from '#lib/components/Slideshow.svelte';
</script>

<section id="top" class="hero min-h-[calc(100svh-5rem)] bg-base-100">
	<div class="hero-content hero-split px-6 py-16 lg:py-28">
		<div class="hero-copy w-full min-w-0 max-w-xl">
			<h1 class="font-display max-w-full text-4xl leading-tight text-base-content sm:text-5xl lg:text-6xl">
				Quality Starts at the Origin.
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-base-content/80">
				PT Irene Bumi Sukapura is an Indonesian processor and exporter focused on delivering quality
				Coffee, Coconut Derivatives, and Fresh Shallots to international markets. Through our trusted
				local network, we ensure a dependable supply that is carefully sourced and prepared for your
				business.
			</p>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a href="#products" class="btn btn-primary btn-lg h-auto min-h-12 whitespace-normal text-center">
					Explore Products
				</a>
				<a href="#contact" class="btn btn-lg h-auto min-h-12 whitespace-normal text-center">Contact Us</a>
			</div>
		</div>
		<Slideshow class="hero-slides" count={heroSlides.length} label="Operations photographs">
			{#snippet children(index, arrows)}
				<div class="relative grid w-full min-w-0">
					{@render arrows()}
					{#each heroSlides as slide, slideIndex (slide.src)}
						<div
							class={['col-start-1 row-start-1', slideIndex === index ? '' : 'invisible']}
							inert={slideIndex !== index}
						>
							<div class="relative aspect-[4/3] w-full overflow-hidden rounded-box bg-base-300">
								<img
									src={slide.src}
									alt={slide.alt}
									width={slide.width}
									height={slide.height}
									loading={slideIndex === 0 ? 'eager' : 'lazy'}
									fetchpriority={slideIndex === 0 ? 'high' : 'low'}
									decoding="async"
									class="absolute inset-0 size-full object-cover"
									style:object-position={slide.focus}
								/>
							</div>
						</div>
					{/each}
				</div>
			{/snippet}
		</Slideshow>
	</div>
</section>

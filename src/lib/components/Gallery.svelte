<script lang="ts">
	import { highlights, site } from '#lib/content.ts';
</script>

<section id="lots" class="bg-base-200 py-24 lg:py-32" aria-labelledby="lots-title">
	<div class="rise-view mx-auto max-w-6xl px-6">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">At origin</p>
		<h2 id="lots-title" class="font-display mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
			The lots we verify.
		</h2>
		<p class="mt-5 max-w-2xl text-base-content/80">
			Photographs from coffee, cocopeat, and fresh shallot programs. Each frame is a lot our inspection
			taskforce can check before it is offered.
		</p>

		<div class="mt-16 space-y-20">
			{#each highlights as group (group.id)}
				<div>
					<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<h3 class="font-display text-3xl">{group.name}</h3>
						<a class="btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{group.action}</a>
					</div>
					<ul class="mt-6 grid gap-4 sm:grid-cols-3">
						{#each group.photos as photo (photo.src)}
							<li>
								<figure>
									<img
										src={photo.src}
										alt={photo.alt}
										width={photo.width}
										height={photo.height}
										loading="lazy"
										decoding="async"
										class="aspect-[4/3] w-full rounded-box object-cover"
										style:object-position={photo.focus}
									/>
									<figcaption class="mt-2 text-sm text-base-content/70">{photo.caption}</figcaption>
								</figure>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

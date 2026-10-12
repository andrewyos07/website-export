<script lang="ts">
	import { documents } from '#lib/content.ts';
</script>

<section id="about" class="bg-base-200 py-24 lg:py-32" aria-labelledby="about-title">
	<div class="rise-view mx-auto grid max-w-6xl items-start gap-16 px-6 lg:grid-cols-2">
		<div>
			<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">About</p>
			<h2 id="about-title" class="font-display mt-4 text-4xl text-balance md:text-5xl">
				Origin buying, with the export file attached.
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-base-content/80">
				PT Irene Bumi Sukapura sources commodities in Indonesia and ships them to importers who buy on
				specification. The work is ordinary on purpose: agree the grade, check the lot, pack it, and
				send the papers a bank and a customs broker can read.
			</p>
			<ul class="mt-8 space-y-4">
				<li class="border-t border-base-300 pt-4">
					<p class="font-medium">Origin access</p>
					<p class="mt-1 text-base-content/75">Lots are bought in Indonesia against the buyer’s sheet, not from a generic stock photo of supply.</p>
				</li>
				<li class="border-t border-base-300 pt-4">
					<p class="font-medium">A specification per lot</p>
					<p class="mt-1 text-base-content/75">Moisture, defects, and packing are written before the booking, then checked against the lot that ships.</p>
				</li>
				<li class="border-t border-base-300 pt-4">
					<p class="font-medium">Documents with the cargo</p>
					<p class="mt-1 text-base-content/75">The export file is prepared with the shipment, so a letter of credit is not waiting on a missing page.</p>
				</li>
			</ul>
		</div>
		<div>
			<figure>
				<img
					src="/media/warehouse.webp"
					alt="Warehouse aisles of packed cartons staged for dispatch"
					width="1100"
					height="734"
					loading="lazy"
					decoding="async"
					fetchpriority="low"
					class="aspect-[4/3] w-full rounded-box object-cover"
				/>
				<figcaption class="mt-3 text-sm text-base-content/70">
					Illustrative photograph of packed export storage.
				</figcaption>
			</figure>
		</div>
	</div>
</section>

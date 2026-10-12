<script lang="ts">
	import { faqs } from '#lib/content.ts';

	let openId = $state<string>(faqs[0].id);

	function toggle(id: string) {
		openId = openId === id ? '' : id;
	}
</script>

<section class="mx-auto max-w-3xl px-6 py-24 lg:py-32" aria-labelledby="faq-title">
	<div class="rise-view">
		<p class="text-xs font-medium tracking-[0.22em] text-accent uppercase">Questions</p>
		<h2 id="faq-title" class="font-display mt-4 text-4xl text-balance md:text-5xl">
			Standard Supply Terms.
		</h2>
		<div class="faq-accordion mt-10 flex flex-col gap-3">
			{#each faqs as faq (faq.id)}
				<div
					class={[
						'collapse collapse-arrow border border-base-300 bg-base-100',
						openId === faq.id && 'collapse-open'
					]}
				>
					<button
						type="button"
						class="collapse-title text-left text-base font-medium"
						aria-expanded={openId === faq.id}
						aria-controls="faq-{faq.id}"
						id="faq-q-{faq.id}"
						onclick={() => toggle(faq.id)}
					>
						{faq.question}
					</button>
					<div
						class="collapse-content text-base-content/80"
						id="faq-{faq.id}"
						role="region"
						aria-labelledby="faq-q-{faq.id}"
					>
						<p>{faq.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq-accordion :global(.collapse) {
		transition: grid-template-rows 0.65s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.faq-accordion :global(.collapse-content) {
		min-height: 0;
		overflow: hidden;
		content-visibility: visible;
		padding-bottom: 1rem;
	}

	.faq-accordion :global(.collapse-content p) {
		transition: opacity 0.45s ease;
	}

	.faq-accordion :global(.collapse:not(.collapse-open) .collapse-content p) {
		opacity: 0;
	}

	@media (prefers-reduced-motion: reduce) {
		.faq-accordion :global(.collapse),
		.faq-accordion :global(.collapse-content p) {
			transition: none;
		}
	}
</style>

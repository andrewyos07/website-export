<script lang="ts">
	import { enhance } from '$app/forms';
	import { incoterms, products, type QuoteResult } from '#lib/content.ts';

	let { result }: { result: QuoteResult | null } = $props();
	let pending = $state(false);
	let values = $derived(result?.values);
</script>

<section id="contact" class="bg-neutral py-24 text-neutral-content lg:py-32" aria-labelledby="contact-title">
	<div class="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
		<div>
			<p class="text-xs font-medium tracking-[0.22em] text-secondary uppercase">Contact</p>
			<h2 id="contact-title" class="font-display mt-4 text-4xl text-balance md:text-5xl">
				Secure Your Production Allocation.
			</h2>
			<p class="mt-6 leading-relaxed text-neutral-content/80">
				Submit your Target Specification Sheet (commodity type, required grading, moisture limits, and
				volume). Our operations desk will issue a formal Supply Contract and production timeline.
			</p>
		</div>

		<form
			method="POST"
			action="?/quote"
			class="rounded-box bg-base-100 p-6 text-base-content md:p-8"
			use:enhance={() => {
				pending = true;
				return async ({ update }) => {
					pending = false;
					await update();
				};
			}}
		>
			{#if result?.success}
				<div role="status" class="alert alert-success alert-soft mb-5">
					<span>The form is valid. It does not send email yet, so also write to the operations desk if you need a reply now.</span>
				</div>
			{/if}
			{#if result?.error}
				<p id="quote-error" role="alert" class="alert alert-error alert-soft mb-5">{result.error}</p>
			{/if}

			<div class="grid gap-4 sm:grid-cols-2">
				<div>
					<label class="label" for="quote-name">Name</label>
					<input
						id="quote-name"
						class="input w-full"
						name="name"
						autocomplete="name"
						required
						value={values?.name ?? ''}
					/>
				</div>
				<div>
					<label class="label" for="quote-company">Company</label>
					<input
						id="quote-company"
						class="input w-full"
						name="company"
						autocomplete="organization"
						required
						value={values?.company ?? ''}
					/>
				</div>
				<div>
					<label class="label" for="quote-email">Email</label>
					<input
						id="quote-email"
						class="input w-full"
						type="email"
						name="email"
						autocomplete="email"
						required
						value={values?.email ?? ''}
					/>
				</div>
				<div>
					<label class="label" for="quote-commodity">Commodity</label>
					<select id="quote-commodity" class="select w-full" name="commodity" value={values?.commodity ?? products[0].id}>
						{#each products as product (product.id)}
							<option value={product.id}>{product.name}</option>
						{/each}
						<option value="other">Other Indonesian commodity</option>
					</select>
				</div>
				<div>
					<label class="label" for="quote-incoterm">Incoterm</label>
					<select id="quote-incoterm" class="select w-full" name="incoterm" value={values?.incoterm ?? 'FOB'}>
						{#each incoterms as term (term)}
							<option value={term}>{term}</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="mt-4">
				<label class="label" for="quote-message">Shipment brief</label>
				<textarea
					id="quote-message"
					class="textarea w-full"
					name="message"
					rows="5"
					required
					placeholder="Quantity, load or discharge port, and any grade you already buy."
					aria-describedby={result?.error ? 'quote-error' : undefined}>{values?.message ?? ''}</textarea>
			</div>
			<button class="btn btn-neutral mt-5" type="submit" disabled={pending} aria-busy={pending}>
				{pending ? 'Sending' : 'Transmit Inquiry'}
			</button>
		</form>
	</div>
</section>

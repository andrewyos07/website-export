<script lang="ts">
	import { enhance } from '$app/forms';
	import { site, type NewsletterResult } from '#lib/content.ts';

	let { result }: { result: NewsletterResult | null } = $props();
	let pending = $state(false);
	const year = new Date().getFullYear();
</script>

<footer class="bg-base-200 px-6 py-16 text-base-content">
	<div class="footer sm:footer-horizontal mx-auto w-full max-w-6xl gap-12">
		<nav class="max-w-xs" aria-label="Company">
			<img src="/brand/logo.webp" alt="" width="336" height="114" class="h-12 w-auto" />
			<p class="mt-4 text-sm leading-relaxed">
				{site.name} exports Indonesian commodities for B2B buyers.
			</p>
		</nav>

		<nav aria-label="Office">
			<h2 class="footer-title">Office and warehouse</h2>
			<p>{site.locality}</p>
			<p>{site.region}</p>
			<a class="link link-hover" href="mailto:{site.email}">{site.email}</a>
		</nav>

		<nav aria-label="Social">
			<h2 class="footer-title">Professional network</h2>
			<a class="link link-hover" href={site.linkedin} rel="noopener noreferrer" target="_blank">
				LinkedIn
				<span class="sr-only"> (opens in a new tab)</span>
			</a>
		</nav>

		<form
			method="POST"
			action="?/newsletter"
			aria-labelledby="newsletter-title"
			use:enhance={() => {
				pending = true;
				return async ({ update }) => {
					pending = false;
					await update();
				};
			}}
		>
			<h2 id="newsletter-title" class="footer-title">Shipment notes</h2>
			{#if result?.success}
				<div role="status" class="alert alert-success alert-soft">
					<span>Address accepted. Mail is not sent until a list service is connected.</span>
				</div>
			{:else}
				{#if result?.error}
					<p id="newsletter-error" role="alert" class="text-sm text-error">{result.error}</p>
				{/if}
				<label class="label" for="newsletter-email">Work email</label>
				<input
					id="newsletter-email"
					class="input w-full"
					type="email"
					name="email"
					autocomplete="email"
					required
					value={result?.email ?? ''}
					aria-describedby={result?.error ? 'newsletter-error' : undefined}
				/>
				<label class="label mt-3 cursor-pointer justify-start gap-3">
					<input type="checkbox" class="checkbox checkbox-sm" name="consent" required />
					<span class="text-sm">Occasional notes only. No third-party lists.</span>
				</label>
				<button class="btn btn-neutral mt-3" type="submit" disabled={pending} aria-busy={pending}>
					{pending ? 'Saving' : 'Subscribe'}
				</button>
			{/if}
		</form>
	</div>
	<div class="mx-auto mt-12 w-full max-w-6xl border-t border-base-300 pt-6 text-sm text-base-content/70">
		<p>© {year} {site.name}. All rights reserved.</p>
	</div>
</footer>

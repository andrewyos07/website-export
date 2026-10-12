<script lang="ts">
	import { site } from '#lib/content.ts';
</script>

<footer class="bg-base-200 px-6 py-16 text-base-content">
	<div class="footer sm:footer-horizontal mx-auto w-full max-w-6xl gap-12">
		<nav class="max-w-sm" aria-label="Company">
			<img src="/brand/logo.webp" alt="" width="336" height="114" class="h-12 w-auto" />
			<p class="mt-4 text-sm leading-relaxed">{site.summary}</p>
		</nav>

		<nav aria-label="Office">
			<h2 class="footer-title">Office and warehouse</h2>
			<p>{site.locality}</p>
			<p>{site.region}</p>
		</nav>

		<nav aria-label="Contact">
			<h2 class="footer-title">Contact</h2>
			<a class="link link-hover" href="mailto:{site.email}">Email: {site.email}</a>
			<a class="link link-hover" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
				WhatsApp Desk: {site.whatsappDisplay}
			</a>
		</nav>
	</div>
	<div class="mx-auto mt-12 w-full max-w-6xl border-t border-base-300 pt-6 text-sm text-base-content/70">
		<p>© 2026 {site.name}. All rights reserved.</p>
	</div>
</footer>

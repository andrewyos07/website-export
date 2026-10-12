<script lang="ts">
	import { site } from '#lib/content.ts';
</script>

<footer class="bg-base-200 px-6 py-16 text-base-content">
	<div class="footer sm:footer-horizontal mx-auto w-full max-w-6xl items-start gap-10">
		<nav class="max-w-sm" aria-label="Company">
			<img src="/brand/logo.webp" alt="" width="336" height="114" class="h-12 w-auto" />
			<p class="mt-4 font-medium tracking-wide">{site.legalName}</p>
			<p class="text-sm">{site.tagline}</p>
			<p class="text-sm">Managing Director: {site.director}</p>
		</nav>

		<nav class="max-w-sm text-sm leading-relaxed" aria-label="Registration">
			<h2 class="footer-title">Registration</h2>
			<p>Business Registration (NIB): {site.nib}</p>
			<p>Tax ID (NPWP): {site.taxId}</p>
		</nav>

		<nav class="max-w-md text-sm leading-relaxed" aria-label="Operations">
			<h2 class="footer-title">Operations</h2>
			<p>Operations Base: {site.address}</p>
			<p>Export Gateways: {site.gateways}</p>
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
		<p>© 2026 {site.name}. Verified Indonesian Sourcing Entity.</p>
	</div>
</footer>

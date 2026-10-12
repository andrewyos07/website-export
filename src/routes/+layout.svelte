<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<a class="skip-link btn btn-neutral" href="#main">Skip to content</a>
{@render children()}

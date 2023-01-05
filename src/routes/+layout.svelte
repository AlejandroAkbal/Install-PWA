<script>
	import '../app.css'

	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>
		{$page.data.title
			? //
			  `${$page.data.title} – Install PWA`
			: //
			  'Install PWA – Easy App installation instructions'}
	</title>

	<meta
		name="description"
		content={$page.data.description ?? 'Easily explain how to install your PWA to your end users. For free!'}
	/>

	<!-- OG -->
	{#if $page.data.imageUrl}
		<meta
			property="og:image"
			content={$page.data.imageUrl}
		/>
	{/if}
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8">
	<slot />
</div>

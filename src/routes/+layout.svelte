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
			  'Install PWA'}
	</title>

	<meta
		name="description"
		content={$page.data.description}
	/>
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8">
	<slot />
</div>

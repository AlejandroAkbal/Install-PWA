<script>
	import '../app.css'

	import { navigating, page } from '$app/stores'
	import { slide } from 'svelte/transition'

	let mobileMenuOpen = false

	$: if ($navigating) {
		mobileMenuOpen = false
	}
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
		content={$page.data.description ?? 'Easily explain how to install your PWA to your end users. For free!'}
		name='description'
	/>

	<!-- OG -->
	{#if $page.data.imageUrl}
		<meta
			property='og:image'
			content={$page.data.imageUrl}
		/>
	{/if}
</svelte:head>

<header class='relative'>
	<!-- Desktop menu -->
	<div class='bg-base-200 py-6'>
		<nav
			aria-label='Global'
			class='relative mx-auto flex max-w-7xl items-center justify-between px-6'
		>
			<div class='flex flex-1 items-center'>
				<div class='flex w-full items-center justify-between md:w-auto'>
					<a href='/'>
						<span class='sr-only'>Install PWA</span>
						<img
							alt='Logo'
							class='h-8 w-auto sm:h-10'
							src='/favicon.svg'
						/>
					</a>
					<div class='-mr-2 flex items-center md:hidden'>
						<button
							aria-expanded='false'
							class='focus-ring-inset inline-flex items-center justify-center rounded-md bg-base-200 p-2 text-base-content hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary-focus'
							on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
							type='button'
						>
							<span class='sr-only'>Open main menu</span>
							<!-- Heroicon name: outline/bars-3 -->
							<svg
								aria-hidden='true'
								class='h-6 w-6'
								fill='none'
								stroke='currentColor'
								stroke-width='1.5'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class='hidden space-x-8 md:ml-10 md:flex'>
					<a
						class='text-base font-medium link link-hover'
						href='/from/www.adidas.com'>Example</a
					>
				</div>
			</div>
		</nav>
	</div>

	<!--
          Mobile menu, show/hide based on menu open state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
	{#if mobileMenuOpen}
		<div
			transition:slide={{ duration: 200 }}
			class='absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden'
		>
			<div class='overflow-hidden rounded-lg bg-base-100 shadow-md ring-1 ring-base-content ring-opacity-5'>
				<div class='flex items-center justify-between px-5 pt-4'>
					<p>👋</p>

					<div class='-mr-2'>
						<button
							on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
							type='button'
							class='inline-flex items-center justify-center rounded-md bg-base-100 p-2 text-base-content hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-focus'
						>
							<span class='sr-only'>Close menu</span>
							<!-- Heroicon name: outline/x-mark -->
							<svg
								class='h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								aria-hidden='true'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
				</div>

				<div class='pt-5 pb-6'>
					<!-- Links -->
					<div class='space-y-1 px-2'>
						<a
							href='/from/www.akbal.dev'
							class='block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50'
						>
							Example
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>

<slot />

<!-- TODO: Footer with social media & credit -->

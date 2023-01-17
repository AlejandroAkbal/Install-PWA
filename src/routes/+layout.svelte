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
						<!--						<button-->
						<!--							aria-expanded='false'-->
						<!--							class='focus-ring-inset inline-flex items-center justify-center rounded-md bg-base-200 p-2 text-base-content hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary-focus'-->
						<!--							on:click={() => (mobileMenuOpen = !mobileMenuOpen)}-->
						<!--							type='button'-->
						<!--						>-->
						<!--							<span class='sr-only'>Open main menu</span>-->
						<!--							&lt;!&ndash; Heroicon name: outline/bars-3 &ndash;&gt;-->
						<!--							<svg-->
						<!--								aria-hidden='true'-->
						<!--								class='h-6 w-6'-->
						<!--								fill='none'-->
						<!--								stroke='currentColor'-->
						<!--								stroke-width='1.5'-->
						<!--								viewBox='0 0 24 24'-->
						<!--								xmlns='http://www.w3.org/2000/svg'-->
						<!--							>-->
						<!--								<path-->
						<!--									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'-->
						<!--									stroke-linecap='round'-->
						<!--									stroke-linejoin='round'-->
						<!--								/>-->
						<!--							</svg>-->
						<!--						</button>-->
					</div>
				</div>
				<div class='hidden space-x-8 md:ml-10 md:flex'>
					<!--					<a-->
					<!--						class='link-hover link text-base font-medium'-->
					<!--						href='/from/image-to-text-ocr.netlify.app'>Example</a-->
					<!--					>-->
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
							href='/from/image-to-text-ocr.netlify.app'
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

<footer class='bg-base-200'>
	<div class='mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8'>
		<!-- TODO: Links -->
		<div class='mt-10 flex justify-center space-x-10'>
			<a
				class='text-gray-400 hover:text-gray-500'
				href='https://redirect.akbal.dev/twitter'
				rel='noopener'
				target='_blank'
			>
				<span class='sr-only'>Twitter</span>
				<svg
					aria-hidden='true'
					class='h-6 w-6'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
					/>
				</svg>
			</a>

			<a
				class='text-gray-400 hover:text-gray-500'
				href='https://github.com/AlejandroAkbal/Install-PWA'
				rel='noopener'
				target='_blank'
			>
				<span class='sr-only'>GitHub</span>
				<svg
					aria-hidden='true'
					class='h-6 w-6'
					fill='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						clip-rule='evenodd'
						d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
						fill-rule='evenodd'
					/>
				</svg>
			</a>
		</div>
		<p class='mt-10 text-center text-xs leading-5 text-gray-500'>
			Made with <span class='text-red-500'>&#9829;</span> by
			<a
				class='link'
				href='https://akbal.dev'
				rel='noopener'
				target='_blank'
			>
				Alejandro Akbal</a>.
		</p>
	</div>
</footer>

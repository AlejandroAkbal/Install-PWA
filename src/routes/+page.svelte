<script>
	import { slide } from 'svelte/transition'

	let mobileMenuOpen = false
</script>

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="relative overflow-hidden">
	<header class="relative">
		<div class="bg-base-200 pt-6">
			<nav
				class="relative mx-auto flex max-w-7xl items-center justify-between px-6"
				aria-label="Global"
			>
				<div class="flex flex-1 items-center">
					<div class="flex w-full items-center justify-between md:w-auto">
						<a href="/">
							<span class="sr-only">Install PWA</span>
							<img
								class="h-8 w-auto sm:h-10"
								src="/favicon.svg"
								alt="Logo"
							/>
						</a>
						<div class="-mr-2 flex items-center md:hidden">
							<button
								on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
								type="button"
								class="focus-ring-inset inline-flex items-center justify-center rounded-md bg-base-200 p-2 text-base-content hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary-focus"
								aria-expanded="false"
							>
								<span class="sr-only">Open main menu</span>
								<!-- Heroicon name: outline/bars-3 -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="hidden space-x-8 md:ml-10 md:flex">
						<a
							href="/from/www.adidas.com"
							class="text-base font-medium link link-hover">Example</a
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
				class="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
			>
				<div class="overflow-hidden rounded-lg bg-base-100 shadow-md ring-1 ring-base-content ring-opacity-5">
					<div class="flex items-center justify-between px-5 pt-4">
						<div>
							<img
								class="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
								alt=""
							/>
						</div>
						<div class="-mr-2">
							<button
								on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
								type="button"
								class="inline-flex items-center justify-center rounded-md bg-base-100 p-2 text-base-content hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-focus"
							>
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x-mark -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="pt-5 pb-6">
						<div class="space-y-1 px-2">
							<a
								href="/from/www.adidas.com"
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
							>
								Example
							</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</header>

	<main>
		<div class="bg-base-200 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
			<div class="mx-auto max-w-7xl lg:px-8">
				<div class="lg:grid lg:grid-cols-2 lg:gap-8">
					<div class="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
						<div class="lg:py-24">
							<!-- Heading -->
							<h1
								class="mt-4 text-4xl font-bold tracking-tight text-base-content sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
							>
								<span class="block">Teach how to</span>
								<span
									class="block bg-gradient-to-r from-primary to-secondary bg-clip-text pb-3 text-transparent sm:pb-5"
								>
									install your PWA
								</span>
							</h1>

							<!-- Body -->
							<p class="text-base text-base-content sm:text-xl lg:text-lg xl:text-xl">
								Installing a PWA on all platforms is not as easy as it should. We teach you how to do it.
							</p>

							<!-- Action -->
							<div class="mt-10 sm:mt-12">
								<form
									action="/from/"
									method="get"
									class="sm:mx-auto sm:max-w-xl lg:mx-0"
								>
									<div class="sm:flex">
										<div class="min-w-0 flex-1">
											<label
												for="email"
												class="sr-only">Website URL</label
											>
											<input
												id="website-url"
												type="url"
												placeholder="Enter your website URL"
												class="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
											/>
										</div>
										<div class="mt-3 sm:mt-0 sm:ml-3">
											<button
												type="submit"
												class="block w-full rounded-md bg-gradient-to-r from-primary to-secondary py-3 px-4 font-medium text-primary-content shadow hover:brightness-75 focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-2 focus:ring-offset-primary-content"
											>
												Create page
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
						<div class="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
							<!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
							<img
								class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
								src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

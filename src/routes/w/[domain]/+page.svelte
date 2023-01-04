<script>
	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui'

	/** @type {import('./$types').PageData} */
	export let data

	const { domain } = data

	export const url = new URL(`https://${domain}`)

	export const websiteCaptureApiUrl = new URL('https://url-shot.api-point.cf')

	websiteCaptureApiUrl.searchParams.set('url', url.toString())

	const sizes = [
		[640, 360],
		[1024, 768],
		[1920, 1080]
	]

	/**
	 * @type {string[]}
	 */
	export const srcset = []

	sizes.forEach(([width, height]) => {
		websiteCaptureApiUrl.searchParams.set('width', width.toString())
		websiteCaptureApiUrl.searchParams.set('height', height.toString())

		srcset.push(`${websiteCaptureApiUrl.toString()} ${width}w`)
	})

	export let selectedTab = 0
</script>

<main class="py-6">
	<section>
		<div class="grid place-items-center gap-3">
			<img
				src="https://www.google.com/s2/favicons?domain={data.domain}"
				alt="Favicon of '{data.domain}' domain"
				style="width: 48px; height: 48px;"
			/>

			<!-- Truncate text -->
			<h1 class="text-2xl truncate font-semibold">
				{data.domain}
			</h1>
		</div>

		<h2 class="mt-2 text-lg">
			Learn how to install the
			<output>{data.domain}</output> PWA on your device in 4 simple steps
		</h2>
	</section>

	<div class="mt-6 grid place-items-center">
		<TabGroup on:change={(e) => (selectedTab = e.detail)}>
			<TabList class="max-w-fit tabs tabs-boxed">
				<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>Android</Tab>
				<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>iOS / iPadOS</Tab>
				<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>Desktop</Tab>
			</TabList>
		</TabGroup>
	</div>

	<section class="mt-6">
		<ol class="space-y-4">
			<li>
				<h3 class="text-lg font-semibold">Step 1</h3>

				<a
					href={url.toString()}
					target="_blank"
					rel="noopener noreferrer"
					class="link link-primary"
				>
					Open the website
				</a>
			</li>

			<li>
				<h3 class="text-lg font-semibold">Step 2</h3>

				{#if selectedTab === 0}
					Click the <kbd class="kbd kbd-sm">More</kbd> button

					<!--  -->
				{:else if selectedTab === 1}
					Click the <kbd class="kbd kbd-sm">Share</kbd> button

					<!--  -->
				{:else}
					-
				{/if}
			</li>

			<li>
				<h3 class="text-lg font-semibold">Step 3</h3>

				{#if selectedTab === 0}
					Click <kbd class="kbd kbd-sm">Install App</kbd>

					<div
						class="block text-left tooltip tooltip-bottom tooltip-primary mt-2"
						data-tip="Try again later! Or just continue, it will still work"
					>
						<button class="btn btn-ghost btn-xs no-animation pl-0"> Only see "Add to Home Screen"? </button>
					</div>

					<!--  -->
				{:else if selectedTab === 1}
					Click <kbd class="kbd kbd-sm">Add to Home Screen</kbd>

					<!--  -->
				{:else}
					Click <kbd class="kbd kbd-sm">Install</kbd>
				{/if}
			</li>

			<li>
				<h3 class="text-lg font-semibold">Step 4</h3>

				Done! ✨

				<br />

				{#if selectedTab === 0}
					You can open the App from your Home Screen

					<!--  -->
				{:else if selectedTab === 1}
					You can open the App from your Home Screen

					<!--  -->
				{:else}
					You can open the App from your Desktop
				{/if}
			</li>
		</ol>
	</section>

	<section class="relative mt-6">
		<!-- Domain capture -->
		<img
			src={websiteCaptureApiUrl.toString()}
			alt="Capture of '{data.domain}' domain"
			srcset={srcset.join(', ')}
			style="filter: brightness(0.7) contrast(1.2);"
			class="shadow-lg w-auto max-h-[60vh]"
		/>
	</section>
</main>

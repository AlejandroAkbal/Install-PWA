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

<main class="py-4">
	<section>
		<div class="grid place-items-center gap-2">
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
			<output>{data.domain}</output> PWA on your device.
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
				Install the App

				{#if selectedTab === 0}
					<ol class="list-decimal list-inside">
						<li>Open the website in Chrome</li>
						<li>
							Click the <code>More</code> button
						</li>
						<li>
							Click <code>Add to Home Screen</code>
						</li>
					</ol>

					<!--  -->
				{:else if selectedTab === 1}
					<ol class="list-decimal list-inside">
						<li>Open the website in Safari</li>
						<li>
							Click the <code>Share</code> button
						</li>
						<li>
							Click <code>Add to Home Screen</code>
						</li>
					</ol>

					<!--  -->
				{:else}
					<ol class="list-decimal list-inside">
						<li>Open the website in Chrome</li>
						<li>
							Click the <code>More</code> button
						</li>
						<li>
							Click <code>Add to Home Screen</code>
						</li>
					</ol>
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

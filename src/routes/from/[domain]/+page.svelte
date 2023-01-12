<script>
	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui'
	import { onMount } from 'svelte'

	/** @type {import('./$types').PageData} */
	export let data

	const { domain } = data

	export const url = new URL(`https://${domain}`)

	function detectTypeOfDevice() {
		const userAgent = window.navigator.userAgent || window.navigator.vendor

		if (/android/i.test(userAgent)) {
			return 0
		}

		if (/iPad|iPhone|iPod/.test(userAgent)) {
			return 1
		}

		return 2
	}

	/**
	 * 0 - Android
	 * 1 - iOS / iPadOS
	 * 2 - Desktop
	 */
	export let selectedTab = 0

	onMount(() => {
		// TODO: Execute before rendering
		selectedTab = detectTypeOfDevice()
	})
</script>

<div class='container mx-auto px-4 sm:px-6 lg:px-8'>
	<!-- TODO: Gradient from bg-base-200 to bg-base-100 -->
	<main class='py-6'>
		<!-- Head -->
		<section>
			<div class='grid place-items-center gap-3'>
				<img
					alt="Favicon of '{data.domain}' domain"
					src='https://www.google.com/s2/favicons?domain={data.domain}'
					style='width: 48px; height: 48px;'
				/>

				<!-- Truncate text -->
				<h1 class='text-2xl truncate font-semibold'>
					{data.domain}
				</h1>

				<h2 class='text-lg'>
					Learn how to install the
					<output>{data.domain}</output>
					PWA on your device in 3 simple steps
				</h2>
			</div>
		</section>

		<!-- Device selector & Preview -->
		<div class='mt-6'>
			<TabGroup
				class='grid place-items-center gap-6'
				defaultIndex={selectedTab}
				on:change={(e) => (selectedTab = e.detail)}
			>
				<TabList class='max-w-fit tabs tabs-boxed'>
					<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>Android</Tab>
					<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>iOS / iPadOS</Tab>
					<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>Desktop</Tab>
				</TabList>

				<TabPanels>
					<!-- Android -->
					<TabPanel>
						<div class='relative shadow-xl min-h-[525px] overflow-hidden rounded-md border-0'>
							<!-- Image cutout overlay -->
							<img
								alt='Android installation cutout'
								class='absolute top-0 left-0 z-10'
								src='/media/img/android-360x780.png'
							/>

							<!-- Domain capture -->
							<img
								alt="Capture of '{data.domain}' domain"
								class='pt-[82px] object-cover'
								src='https://screenshot.akbal.dev/v1/capture?width=360&height=780&url={url.toString()}'
								style='filter: brightness(0.8) contrast(1.2);'
							/>
						</div>
					</TabPanel>

					<!-- iOS -->
					<TabPanel>
						<div class='relative shadow-xl max-h-[500px] overflow-hidden rounded-md border-0'>
							<!-- Image cutout overlay -->
							<img
								alt='iOS installation cutout'
								class='absolute top-0 left-0 z-10'
								src='/media/img/ios-1024x715.png'
							/>

							<!-- Domain capture -->
							<img
								alt="Capture of '{data.domain}' domain"
								class='pt-[64px] object-cover'
								src='https://screenshot.akbal.dev/v1/capture?width=1024&height=715&url={url.toString()}'
								style='filter: brightness(0.7) contrast(1.2);'
							/>
						</div>
					</TabPanel>

					<!-- Desktop -->
					<TabPanel>
						<div class='relative shadow-xl max-h-[40vh] overflow-hidden rounded-md border-0'>
							<!-- Image cutout overlay -->
							<img
								alt='Desktop installation cutout'
								class='absolute top-0 left-0 z-10'
								src='/media/img/desktop-1920x1080.png'
							/>

							<!-- Domain capture -->
							<img
								alt="Capture of '{data.domain}' domain"
								class='pt-[52px] object-cover'
								src='https://screenshot.akbal.dev/v1/capture?width=1920&height=1080&url={url.toString()}'
								style='filter: brightness(0.7) contrast(1.2);'
							/>
						</div>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</div>

		<!-- Instructions -->
		<section class='mt-6'>
			<ol class='space-y-4'>
				<li>
					<h3 class='text-lg font-semibold'>Step 1</h3>

					{#if selectedTab === 0}
						Connect to a WiFi network and
					{/if}

					<a
						class='link link-info'
						href={url.toString()}
						rel='noopener noreferrer'
						target='_blank'
					>
						Open the website
					</a>

					{#if selectedTab === 0}
						in Google Chrome
					{/if}
				</li>

				<li>
					<h3 class='text-lg font-semibold'>Step 2</h3>

					{#if selectedTab === 0}
						Click the <kbd class='kbd kbd-sm'>More</kbd> button

						<!--  -->
					{:else if selectedTab === 1}
						Click the <kbd class='kbd kbd-sm'>Share</kbd> button

						<!--  -->
					{:else}
						-
					{/if}
				</li>

				<li>
					<h3 class='text-lg font-semibold'>Step 3</h3>

					{#if selectedTab === 0}
						Click <kbd class='kbd kbd-sm'>Install App</kbd>

						<div
							class='block text-left tooltip tooltip-bottom tooltip-primary mt-2'
							data-tip='Try again later! Or just continue, it will still work'
						>
							<button class='btn btn-ghost btn-xs no-animation pl-0'> Only see "Add to Home Screen"?</button>
						</div>

						<!--  -->
					{:else if selectedTab === 1}
						Click <kbd class='kbd kbd-sm'>Add to Home Screen</kbd>

						<!--  -->
					{:else}
						Click <kbd class='kbd kbd-sm'>Install</kbd>
					{/if}
				</li>

				<li>
					<h3 class='text-lg font-semibold'>Done! ✨</h3>

					{#if selectedTab === 0}
						You can open the <code>{data.domain}</code> app from your Home Screen

						<!--  -->
					{:else if selectedTab === 1}
						You can open the <code>{data.domain}</code> app from your Home Screen

						<!--  -->
					{:else}
						You can open the <code>{data.domain}</code> app from your Desktop
					{/if}
				</li>
			</ol>
		</section>

		<!-- TODO: Copy button -->
		<!-- TODO: Share button -->
	</main>
</div>

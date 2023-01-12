<script>
	import { Tab, TabGroup, TabList } from '@rgossiaux/svelte-headlessui'
	import { browser } from '$app/environment'

	/** @type {import('./$types').PageData} */
	export let data

	const { domain } = data

	export const domainUrl = new URL(`https://${domain}`).toString()

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
	let selectedTab = 0

	const devices = [
		{
			name: 'Android',
			capture: `https://screenshot.akbal.dev/v1/capture?width=360&height=780&url=${domainUrl}`,
			cutout: '/media/img/android-360x780.png',
			cutoutMarginTop: 82,
			width: 360,
			height: 780
		},
		{
			name: 'iOS',
			capture: `https://screenshot.akbal.dev/v1/capture?width=1024&height=715&url=${domainUrl}`,
			cutout: '/media/img/ios-1024x715.png',
			cutoutMarginTop: 68,
			width: 1024,
			height: 715
		},
		{
			name: 'Desktop',
			capture: `https://screenshot.akbal.dev/v1/capture?width=1920&height=1080&url=${domainUrl}`,
			cutout: '/media/img/desktop-1920x1080.png',
			cutoutMarginTop: 83,
			width: 1920,
			height: 1080
		}
	]

	$: selectedDevice = devices[selectedTab]

	let canvas

	async function preloadImages(imageUrls) {

		const promises = imageUrls.map(async (url) => {
			const img = new Image()
			img.src = url

			await img.decode()

			return img
		})

		return Promise.all(promises)
	}

	async function drawTwoImageUrlsAsOne() {
		const canvasContext = canvas.getContext('2d')

		console.debug('Got canvas')

		// Clear canvas
		canvasContext.clearRect(0, 0, canvas.width, canvas.height)

		const [image, imageOnTop] = await preloadImages([
			selectedDevice.capture,
			selectedDevice.cutout
		])

		image.src = selectedDevice.capture
		imageOnTop.src = selectedDevice.cutout

		canvasContext.drawImage(image, 0, selectedDevice.cutoutMarginTop)

		// Draw image on top
		canvasContext.drawImage(imageOnTop, 0, 0)

		console.debug('Images drawn')
	}

	if (browser) {
		selectedTab = detectTypeOfDevice()
	}

	$: if (browser && selectedDevice) {
		window.requestAnimationFrame(() => drawTwoImageUrlsAsOne(selectedDevice.capture, selectedDevice.cutout))
	}
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

				<canvas
					alt="Capture of '{data.domain}' domain"
					bind:this={canvas}
					class='w-auto max-w-full max-h-[60vh] md:max-h-[55vh] shadow-xl border-0 rounded-md'
					height={selectedDevice.height}
					width={selectedDevice.width}
				>
				</canvas>
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
						href={domainUrl}
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

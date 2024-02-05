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

		if (/iPad|iPhone|iPod|Safari/.test(userAgent)) {
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

	/**
	 * @param {string[]} urls - Array of Image URLs
	 * @returns {Promise<HTMLImageElement[]>} - Promise that resolves when all images are loaded, or rejects if any image fails to load
	 */
	function preloadImages(urls) {
		const promises = urls.map((url) => {
			return new Promise((resolve, reject) => {
				const image = new Image()

				image.src = url

				image.onload = () => resolve(image)
				image.onerror = () => reject(`Image failed to load: ${url}`)
			})
		})

		return Promise.all(promises)
	}

	async function drawTwoImageUrlsAsOne() {
		const canvasContext = canvas.getContext('2d')

		// Clear canvas
		canvasContext.clearRect(0, 0, canvas.width, canvas.height)

		// TODO: Handle errors
		const [image, imageOnTop] = await preloadImages([selectedDevice.capture, selectedDevice.cutout])

		canvasContext.drawImage(image, 0, selectedDevice.cutoutMarginTop)

		// Darken image
		canvasContext.fillStyle = 'rgba(0, 0, 0, 0.45)'
		canvasContext.fillRect(0, 0, canvas.width, canvas.height)

		// Draw image on top
		canvasContext.drawImage(imageOnTop, 0, 0)
	}

	if (browser) {
		selectedTab = detectTypeOfDevice()
	}

	$: if (browser && selectedDevice) {
		window.requestAnimationFrame(() => drawTwoImageUrlsAsOne(selectedDevice.capture, selectedDevice.cutout))
	}
</script>

<div class='bg-gradient-to-b from-base-100 via-base-0'>
	<main class='container mx-auto px-4 py-6 sm:px-6 lg:px-8'>
		<!-- Head -->
		<section>
			<div class='grid place-items-center gap-3'>

				<h1 class='text-lg'>
					Install the
					<output>{data.domain}</output>
					app in 2 simple steps
				</h1>
			</div>
		</section>

		<!-- Device selector & Preview -->
		<div class='mt-6'>
			<TabGroup
				class='grid place-items-center gap-6'
				defaultIndex={selectedTab}
				on:change={(e) => (selectedTab = e.detail)}
			>
				<TabList class='tabs tabs-boxed max-w-fit'>
					<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>Android</Tab>
					<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>iOS / iPadOS</Tab>
					<Tab class={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>Desktop</Tab>
				</TabList>

				<canvas
					alt="Capture of '{data.domain}' domain"
					bind:this={canvas}
					class='max-h-[60vh] w-auto max-w-full rounded-md border-0 shadow-xl md:max-h-[55vh]'
					height={selectedDevice.height}
					width={selectedDevice.width}
				/>
			</TabGroup>
		</div>

		<!-- Instructions -->
		<section class='mt-6'>
			<ol class='space-y-4'>
				<li>
					<h3 class='text-lg font-semibold'>Step 1</h3>

					{#if selectedTab === 0}
						Click the <kbd class='kbd kbd-sm'>More</kbd> button

						<!--  -->
					{:else if selectedTab === 1}
						Click the <kbd class='kbd kbd-sm'>Share</kbd> button

						<!--  -->
					{:else}
						Find the <kbd class='kbd kbd-sm'>Install</kbd> button
					{/if}
				</li>

				<li>
					<h3 class='text-lg font-semibold'>Step 2</h3>

					{#if selectedTab === 0}
						Click <kbd class='kbd kbd-sm'>Install App</kbd>

						<div
							class='tooltip tooltip-bottom tooltip-primary mt-2 block text-left'
							data-tip='Try again later! Or just continue, it will still work'
						>
							<button class='btn-ghost no-animation btn-xs btn pl-0'>Only see "Add to Home Screen"?</button>
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
						Open the <code>{data.domain}</code> app from your Home Screen

						<!--  -->
					{:else if selectedTab === 1}
						Open the <code>{data.domain}</code> app from your Home Screen

						<!--  -->
					{:else}
						Open the <code>{data.domain}</code> app from your Desktop
					{/if}
				</li>
			</ol>
		</section>
	</main>
</div>

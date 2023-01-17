<script>
	import { goto } from '$app/navigation'

	/**
	 * Form submit event
	 * @param {Event} event
	 */
	function onSubmit(event) {
		const formData = new FormData(event.target)

		const url = formData.get('website-url')

		const domain = new URL(url).hostname

		goto(`/from/${encodeURIComponent(domain)}`)
	}
</script>

<main>
	<div class='bg-base-200 pt-2 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14'>
		<div class='mx-auto max-w-7xl lg:px-8'>
			<div class='lg:grid lg:grid-cols-2 lg:gap-8'>
				<div class='mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left'>
					<div class='lg:py-24'>
						<!-- Heading -->
						<h1
							class='mt-4 text-4xl font-bold tracking-tight text-base-content sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'
						>
							<span class='block'>Teach how to</span>
							<span class='block bg-gradient-to-r from-primary to-secondary bg-clip-text pb-3 text-transparent sm:pb-5'>
								install your PWA
							</span>
						</h1>

						<!-- Body -->
						<p class='text-base text-base-content sm:text-xl lg:text-lg xl:text-xl'>
							Installing a PWA is not straightforward on all platforms. We help your users install your PWA regardless
							of their device. For free.
						</p>

						<!-- Action -->
						<div class='mt-10 sm:mt-12'>
							<form
								class='sm:mx-auto sm:max-w-xl lg:mx-0'
								on:submit|preventDefault={onSubmit}
							>
								<div class='sm:flex'>
									<div class='min-w-0 flex-1'>
										<label
											class='sr-only'
											for='website-url'>Website URL</label
										>
										<input
											class='block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900'
											id='website-url'
											name='website-url'
											placeholder='Enter your website URL'
											required
											type='url'
										/>
									</div>
									<div class='mt-3 sm:mt-0 sm:ml-3'>
										<button
											class='block w-full rounded-md bg-gradient-to-r from-primary to-secondary py-3 px-4 font-medium text-primary-content shadow hover:brightness-75 focus:outline-none focus:ring-2 focus:ring-primary-focus focus:ring-offset-2 focus:ring-offset-primary-content'
											type='submit'
										>
											Create install page
										</button>
									</div>
								</div>

								<div class='mt-8 space-y-8 text-center sm:text-left'>
									<span class='text-sm'> Or </span>

									<a
										class='link link-neutral block text-sm sm:inline'
										href='/from/image-to-text-ocr.netlify.app'
									>
										View example
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class='mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0'>
					<div class='mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0'>
						<!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
						<img
							alt=''
							class='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
							src='https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg'
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--	TODO: Steps -->
</main>
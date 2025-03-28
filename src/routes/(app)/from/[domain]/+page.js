import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load({ url, params, setHeaders }) {
	if (!params.domain) {
		error(404, 'Not found')
	}

	// Cache for 1 hour, revalidate every 24 hours
	setHeaders({
		'cache-control': 'public, max-age=3600, stale-while-revalidate=86400'
	})

	return {
		title: `Install the ${params.domain} web app`,
		description: `Learn how to install the ${params.domain} web app in your device! It does not require any permissions and does not take up any space on your device.`,

		imageUrl: `https://screenshot.akbal.dev/v1/capture?width=1200&height=630&delay=2&mime_type=jpeg&url=${url.href}`,

		domain: params.domain
	}
}

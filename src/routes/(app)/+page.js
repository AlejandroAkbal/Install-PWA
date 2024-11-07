/** @type {import('./$types').PageLoad} */
export function load({ url, setHeaders }) {
	// Cache for 1 hour, revalidate every 24 hours
	setHeaders({
		'cache-control': 'public, max-age=3600, stale-while-revalidate=86400'
	})

	return {
		imageUrl: `https://screenshot.akbal.dev/v1/capture?width=1200&height=630&delay=2&mime_type=jpeg&url=${url.href}`
	}
}

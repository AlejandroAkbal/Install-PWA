import { error } from '@sveltejs/kit'
import { PUBLIC_APP_URL } from '$env/static/public'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (!params.domain) {
		throw error(404, 'Not found')
	}

	// Poor mans router
	const currentUrl = encodeURIComponent(PUBLIC_APP_URL + '/from/' + params.domain)

	return {
		title: params.domain,
		description: `Learn how to install the ${params.domain} app!`,

		imageUrl: `https://screenshot.akbal.dev/v1/capture?width=1200&height=630&delay=2&mime_type=jpeg&url=${currentUrl}`,

		domain: params.domain
	}
}

import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (!params.domain) {
		throw error(404, 'Not found')
	}

	return {
		title: params.domain,
		description: `Learn how to install the ${params.domain} app!`,

		imageUrl: `https://screenshot.akbal.dev/v1/capture?width=1200&height=630&url=${params.domain}`,

		domain: params.domain
	}
}

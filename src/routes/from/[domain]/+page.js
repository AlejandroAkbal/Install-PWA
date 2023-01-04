import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (!params.domain) {
		throw error(404, 'Not found');
	}

	return {
		title: params.domain,
		description: `Learn how to install the ${params.domain} app!`,

		domain: params.domain
	};
}

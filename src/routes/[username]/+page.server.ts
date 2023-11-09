import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getReadme } from '../../server/api';

export const load: PageServerLoad = async ({ params }) => {
	if (!params.username) {
		throw error(404, 'Username not defined');
	}

	const username = params.username;

	const readmeText: string = await getReadme(username);

	if (!readmeText) {
		throw error(404, { message: 'README is empty' });
	}

	return { readmeText };
};

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { GitHubUser } from '../../types/github_types';
import { getProfileData, getReadme } from '../../server/api';
import { compile } from 'mdsvex';

export const load: PageServerLoad = async ({ params }) => {
	if (!params.username) {
		throw error(404, 'Username not defined');
	}
	const readmeText: string = await getReadme(params.username);

	if (!readmeText) {
		throw error(404, { message: 'README is empty' });
	}
	const compiledResponse = await compile(readmeText);

	const profileData: GitHubUser = await getProfileData(params.username);

	if (!profileData) {
		throw error(404, { message: 'README is empty' });
	}

	return { content: compiledResponse?.code, username: params.username, profileData };
};

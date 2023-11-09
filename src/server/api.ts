import { GITHUB_TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function getReadme(username: string) {
	const response = await fetch(`https://api.github.com/repos/${username}/${username}/readme`, {
		headers: {
			Authorization: 'Bearer ' + GITHUB_TOKEN,
			Accept: 'application/vnd.github.raw'
		}
	});

	if (!response.ok) {
		throw error(404, { message: 'Profile README for this user does not exist' });
	}

	const readmeText: string = await response.text();
	return readmeText;
}

export async function getProfileData(username: string) {
	const response = await fetch(`https://api.github.com/users/${username}`, {
		headers: {
			Authorization: 'Bearer ' + GITHUB_TOKEN,
			Accept: 'application/vnd.github.raw'
		}
	});

	if (!response.ok) {
		throw error(404, { message: 'Profile does not exist' });
	}

	const userData = await response.json();
	return userData;
}

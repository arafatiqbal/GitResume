import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const userName = data.get('userName');
		if (userName) throw redirect(303, `/${userName}`);
		else return fail(400);
	}
} satisfies Actions;

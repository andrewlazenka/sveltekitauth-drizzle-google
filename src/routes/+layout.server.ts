import type { RequestEvent } from '@sveltejs/kit';

export async function load({ locals }: RequestEvent) {
	const session = await locals.getSession();
	return { session };
}

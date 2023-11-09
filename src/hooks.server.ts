import { drizzle } from 'drizzle-orm/d1';
import { SvelteKitAuth } from '@auth/sveltekit';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import Google from '@auth/core/providers/google';
import { sequence } from '@sveltejs/kit/hooks';

import * as schema from 'src/schema';
import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

import type { Handle } from '@sveltejs/kit';

const setupDB: Handle = async function ({ event, resolve }) {
	event.locals.db = drizzle(event.platform?.env?.DB, { schema });

	return resolve(event);
};

const setupAuth = SvelteKitAuth(async (event) => ({
	adapter: DrizzleAdapter(event.locals.db),
	providers: [Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })],
	secret: AUTH_SECRET,
	trustHost: true,
	callbacks: {
		async session({ session, user }) {
			if (session.user) {
				session.user.id = user.id;
			}

			return session;
		},
		async signIn({ user, account, profile, email }) {
			console.log('user', user);
			console.log('account', account);
			console.log('profile', profile);
			console.log('email', email);
			return true;
		}
	}
}));

export const handle = sequence(setupDB, setupAuth);

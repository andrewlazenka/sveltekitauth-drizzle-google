import * as schema from 'src/schema';

import type { D1Database } from '@cloudflare/workers-types';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import type { Session } from '@auth/core/types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: DrizzleD1Database<typeof schema>;
			session: Session | null;
		}
		// interface PageData {}
		interface Platform {
			env: {
				DB?: D1Database;
			};
		}
	}
}

export {};

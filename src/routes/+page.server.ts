import type { PageServerLoad } from './$types';

import { cache } from '$lib/server/cache';

export const load: PageServerLoad = async ({ params }) => {
    return {
        posts: cache.metaList
    };
};

export const prerender = false;
export const ssr = true;
export const csr = true;
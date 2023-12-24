import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { cache } from '$lib/server/cache';

export const load: PageServerLoad = async ({ params }) => {

    if (cache.postMap[params.slug]) {
        return { post: cache.postMap[params.slug] };
    }

    error(404, 'Not found');
};
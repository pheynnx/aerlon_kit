import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';

export const GET: RequestHandler = async () => {
    const posts = await prisma.post.findMany();

    return json(posts);
}
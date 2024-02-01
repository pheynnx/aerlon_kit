import { building } from "$app/environment";
import { json, type Handle } from '@sveltejs/kit';
import prisma from "$lib/prisma";
import { InitCache } from "$lib/server/cache";
import { DecryptAdminJWE } from '$lib/server/auth/jwt';
import { VerifyAdminCredentials } from '$lib/server/auth/verify';

if (!building) {
    await InitCache(prisma)
}


export const handle: Handle = async ({ event, resolve, }) => {
    if (event.url.pathname.startsWith('/api')) {
        const authCookie = event.cookies.get("auth");

        if (!authCookie) {
            return json({ status: "not authorized" }, { status: 400 })
        }

        const claims = await DecryptAdminJWE(authCookie);
        if (claims) {
            if (VerifyAdminCredentials(claims.password, claims.pin)) {
                const response = await resolve(event);
                return response;
            }
        }

        return json({ status: "not authorized" }, { status: 400 })
    }

    const response = await resolve(event);
    return response;
};
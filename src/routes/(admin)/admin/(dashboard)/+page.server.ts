import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { DecryptAdminJWE } from '$lib/server/auth/jwt';
import { VerifyAdminCredentials } from '$lib/server/auth/verify';

export const load: PageServerLoad = async ({ cookies }) => {

    const authCookie = cookies.get("auth");

    if (!authCookie) {
        redirect(307, '/admin/login');
    }

    const claims = await DecryptAdminJWE(authCookie);
    if (claims) {
        if (VerifyAdminCredentials(claims.password, claims.pin)) {
            return
        }
    }

    redirect(307, '/admin/login');
};

export const actions = {
    logout: async ({ cookies }) => {
        cookies.delete("auth", { path: "/" })

        redirect(307, '/admin/login');
    }
};

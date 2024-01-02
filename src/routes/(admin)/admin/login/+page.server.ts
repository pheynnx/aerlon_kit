import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { GenerateAdminJWE, DecryptAdminJWE } from '$lib/server/auth/jwt';
import { VerifyAdminCredentials } from '$lib/server/auth/verify';

export const load: PageServerLoad = async ({ cookies }) => {

    const authCookie = cookies.get("auth");

    if (!authCookie) {
        return
    }

    const claims = await DecryptAdminJWE(authCookie);
    if (claims) {
        // didn't pass decryption checks, do nothing
        if (VerifyAdminCredentials(claims.password, claims.pin)) {
            // if credentials match then redirect to /admin
            redirect(307, '/admin');
        }
    }
    cookies.delete("auth", { path: "/admin" })

    return
};

export const actions = {
    default: async ({ cookies, request }) => {

        const data = await request.formData();
        const pin = data.get("pin").toString();
        const password = data.get("password").toString();

        // check login credentials
        if (VerifyAdminCredentials(password, pin)) {
            // generate jwt
            const jwe = await GenerateAdminJWE({ password, pin }, "2days");

            // create cookie with jwe
            cookies.set("auth", jwe, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 5,
                // secure: true,
                path: "/"
            });

            // if credentials match then redirect to /admin
            redirect(307, '/admin');
        }

        return fail(400, { error: "Invalid Credentials" });

    },
} satisfies Actions;
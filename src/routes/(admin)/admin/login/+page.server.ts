import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = ({ cookies }) => {

    console.log("PAGE LOAD CHECK FOR AUTH")

    // check for cookie
    const authCookie = cookies.get("auth");

    console.log("authCookie", authCookie);

    // validate jwt in cookie

    // if authorized redirect to /admin

    return {

    };
};

export const actions = {
    default: async ({ cookies, request }) => {

        const data = await request.formData();
        const pin = data.get("pin");
        const password = data.get("password");

        console.log("pin", pin);
        console.log("pass", password);

        // check login credentials

        // generate jwt

        // create cookie with jwt
        cookies.set("auth", "asjkdbfjkasdbfjkasdf", {
            httpOnly: true,
            maxAge: 60 * 60 * 2,
            // secure: true,
            path: "/admin"
        })

        // redirect to /admin
        // redirect(307, '/admin');

    },
} satisfies Actions;
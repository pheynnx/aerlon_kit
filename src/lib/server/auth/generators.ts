import crypto from "crypto";
import { JWT_SECRET } from "$env/static/private"

let SECRET: Uint8Array;

export async function pbkdf2Async(passphrase: string): Promise<Uint8Array> {
    console.log("[PBKDF2ASYNC] THIS GOT CALLED");

    return new Promise((res, rej) => {
        crypto.pbkdf2(passphrase, 'salt', 100000, 32, 'sha256', (err, key) => {
            err ? rej(err) : res(new Uint8Array(key));
        });
    });
}

SECRET = await pbkdf2Async(JWT_SECRET)

export { SECRET };
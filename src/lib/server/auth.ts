import * as jose from 'jose';
import crypto from "crypto";

function pbkdf2Async(passphrase: string): Promise<Uint8Array> {
    return new Promise((res, rej) => {
        crypto.pbkdf2(passphrase, 'salt', 100000, 32, 'sha256', (err, key) => {
            err ? rej(err) : res(new Uint8Array(key));
        });
    });
}


const customClaims = {
    "username": "timmy",
    "password": "ronald"
}

const jwt = await new jose.SignJWT({ ...customClaims }).setProtectedHeader({ alg: "HS256" }).sign(await pbkdf2Async(process.env.JWT_SECRET))
import * as jose from 'jose';
import { SECRET } from './generators';

interface JWEAdminClaims {
    password: string,
    pin: string
}

export async function GenerateAdminJWE(claims: JWEAdminClaims, expiration: `${number}days`): Promise<string> {
    return await new jose.EncryptJWT({ ...claims })
        .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
        .setExpirationTime(expiration)
        .setIssuedAt()
        .encrypt(SECRET)
}

export async function DecryptAdminJWE(token: string): Promise<JWEAdminClaims> {
    try {
        const { payload } = await jose.jwtDecrypt(token, SECRET)

        if (payload.password && payload.pin) {
            return {
                password: payload.password as string,
                pin: payload.pin as string
            }
        }

        throw new Error("missing credentials");

    } catch (error) {
        return null
    }
}

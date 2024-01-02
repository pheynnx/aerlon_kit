import { ADMIN_PASSWORD, ADMIN_PIN } from "$env/static/private"

export function VerifyAdminCredentials(password: string, pin: string): boolean {
    try {
        return ADMIN_PASSWORD == password && ADMIN_PIN == pin
    } catch (error) {
        return false
    }
}
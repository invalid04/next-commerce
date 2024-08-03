export async function isValidPassword(password: string, hashedPassword: string) {
    return hashedPassword(password) === hashedPassword
}
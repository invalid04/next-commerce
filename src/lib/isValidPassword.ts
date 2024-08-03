export async function isValidPassword(password: string, hashedPassword: string) {
    return await hashPassword(password) === hashedPassword
}

async function hashedPassword(password: string) {
    const arrayBuffer = await crypto.subtle.digest(
        'SHA-512', 
        new TextEncoder().encode(password)
    )
}
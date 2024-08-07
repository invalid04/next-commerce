'use server'

import db from "@/db/db"

export async function deleteUser(id: string) {
    const user = await db.user.delete({
        where: { id },
    })

    
}
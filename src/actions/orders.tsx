'use server'

import db from "@/db/db";
import { z } from "zod";

const emailSchema = z.string().email()

export async function emailOrderHistory(
    prevState: unknown,
    formData: FormData,
): Promise<{ 
    message?: string; 
    error?: string 
}> {
    const result = emailSchema.safeParse(formData.get('email'))

    if (result.success === false) {
        return {
            error: 'Invalid email address'
        }
    }

    const user = await db.user.findUnique({
        where: { email: result.data },
        select: {
            email: true,
            orders: {
                select: {
                    pricePaidInCents: true,
                    id: true,
                    createdAt: true,
                    product: {
                        select: {
                            id: true,
                            name: true,
                            imagePath: true,
                            description: true,
                        }
                    }
                }
            }
        }
    })

    if (user == null) {
        return {
            message: 'check your email to view order history and download links'
        }
    }

    const orders = user.orders.map(async order => {
        return {
            ...order,
            downloadVerificationId: (
                await db.downloadVerification.create({
                    data: {
                        expiresAt: new Date(Date.now() + 24 * 1000 * 60 * 60),
                        productId: order.product.id,
                    },
                })
            ).id
        }
    })

    return {
        message: ''
    }
}
import db from "@/db/db"

function getOrders() {
    return db.order.findMany({
        select: {
            id: true,
            pricePaidInCents: true,
            product: { select: { name: true } },
            user: { select: { email: true } },
        },
        orderBy: { createdAt: 'desc' },
    })
}

export default function OrdersPage() {
    return (
        <h1>Order</h1>
    )
}
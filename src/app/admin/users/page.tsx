import db from "@/db/db"

function getUsers() {
    return db.user.findMany({
        select: {
            id: true,
            email: true,
            orders: { select: { pricePaidInCents: true } },
        },
        orderBy: { createdAt: 'desc' },
    })
}

export default function UsersPage() {
    return (
        <h1>hi</h1>
    )
}
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

async function UsersTable() {
    const users = await getUsers()

    if (users.length === 0) return <p>No customers found</p>
}
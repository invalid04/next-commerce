import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
        <UsersTable />
    )
}

async function UsersTable() {
    const users = await getUsers()

    if (users.length === 0) return <p>No customers found</p>

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead className='w-0'>
                        <span className='sr-only'>Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
        </Table>
    )
}
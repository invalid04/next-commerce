import db from "@/db/db"
import { Product } from "@prisma/client"

function getMostPopularProducts() {
    return db.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { orders: { _count: 'desc' } },
        take: 6
    })
}

function getNewestProducts() {
    return db.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { createdAt: 'desc' },
        take: 6
    })
}

export default function HomePage() {
    return (
        <main className='space-y-12'>

        </main>
    )
}

type ProductGridSectionProps = {
    productsFetcher: () => Promise<Product[]>
}

function ProductGridSection() {

}
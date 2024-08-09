type OrderHistoryEmailProps = {
    orders: {
        id: string
        pricePaidInCents: number 
        createdAt: Date 
        downloadVerificationId: string 
        product: {
            name: string 
            imagePath: string 
            description: string
        }
    }[]
}

export default function OrderHistoryEmail({
    orders
}: OrderHistoryEmailProps) {
    return (
        <h1>hi</h1>
    )
}
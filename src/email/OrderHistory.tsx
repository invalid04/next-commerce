import { 
    Body, 
    Container, 
    Head, 
    Heading, 
    Hr, 
    Html, 
    Preview, 
    Tailwind 
} from "@react-email/components"
import React from 'react'
import OrderInformation from "./components/OrderInformation"

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

OrderHistoryEmail.PreviewProps = {
    orders: [
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 10000,
            downloadVerificationId: crypto.randomUUID(),
            product: {
                name: 'Product name',
                description: 'description',
                imagePath: '/products/794c2e81-4a8c-439f-b649-7031848188c4-cartoon beaver  0f8c71d1-539d-45a9-b83a-bd22d2567cf5.png'
            },
        },
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 2000,
            downloadVerificationId: crypto.randomUUID(),
            product: {
                name: 'product 2',
                description: 'description 2',
                imagePath: '/products/794c2e81-4a8c-439f-b649-7031848188c4-cartoon beaver  0f8c71d1-539d-45a9-b83a-bd22d2567cf5.png'
            },
        },
    ],
} satisfies OrderHistoryEmailProps

export default function OrderHistoryEmail({
    orders
}: OrderHistoryEmailProps) {
    return (
        <Html>
            <Preview>Order History & Downloads</Preview>
            <Tailwind>
                <Head />
                <Body className='font-sans bg-white'>
                    <Container className='max-w-xl'>
                        <Heading>Order History</Heading>
                        {orders.map((order, index) => (
                            <React.Fragment key={order.id}>
                                <OrderInformation 
                                    order={order}
                                    product={order.product}
                                    downloadVerificationId={order.downloadVerificationId}
                                />
                                {index < orders.length - 1 && <Hr />}
                            </React.Fragment>
                        ))}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
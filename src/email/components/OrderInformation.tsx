import { Column, Row, Section, Text } from "@react-email/components"

type OrderInformationProps = {
    order: {}
    product: {}
    downloadVerificationId: string
}

const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium' })

export default function OrderInformation({
    order,
    product,
    downloadVerificationId
}: OrderInformationProps) {
    return (
        <Section>
            <Row>
                <Column>
                    <Text 
                        className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'
                    >
                        Order ID
                    </Text>
                    <Text className='mt-0 mr-4'>
                        {order.id}
                    </Text>
                </Column>
                <Column>
                    <Text 
                        className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'
                    >
                        Purchased On
                    </Text>
                    <Text className='mt-0 mr-4'>
                        {dateFormatter.format(order.createdAt)}
                    </Text>
                </Column>
                <Column>
                    <Text 
                        className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'
                    >
                        Order ID
                    </Text>
                    <Text className='mt-0 mr-4'>
                        {order.id}
                    </Text>
                </Column>
            </Row>
        </Section>
    )
}
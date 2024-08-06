'use client'

import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Image from 'next/image'

type CheckoutFormProps = {
    product: {
        imagePath: string 
        name: string 
        priceInCents: number 
        description: string
    }
    clientSecret: string
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)

export function CheckoutForm({ 
    product, 
    clientSecret
}: CheckoutFormProps) {
    return (
        <>
            <div className='max-w-5xl w-full mx-auto space-y-8'>
                <div>
                    <Image 
                        src={product.imagePath}
                    />
                </div>
                <Elements options={{ clientSecret }} stripe={stripePromise}>
                    <Form />
                </Elements>    
            </div>    
        </>
    )
}

function Form() {
    const stripe = useStripe()
    const elements = useElements()

    return <PaymentElement />
}
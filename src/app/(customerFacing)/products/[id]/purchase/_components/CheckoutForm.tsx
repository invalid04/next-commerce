import { loadStripe } from '@stripe/stripe-js'

type CheckoutFormProps = {
    product: {}
    clientSecret: string
}

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)

export function CheckoutForm({ 
    product, 
    clientSecret
}: CheckoutFormProps) {
    return (
        <Elements options={{ clientSecret }} stripe={stripe}>

        </Elements>
    )
}
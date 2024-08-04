import { formatCurrency } from "@/lib/formatters";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function ProductCard({ name, priceInCents, description }) {
    return (
        <Card className='flex overflow-hidden flex-col'>
            <CardHeader>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardDescription>
                    {formatCurrency(priceInCents / 100)}
                </CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
                <p className='line-clamp-4'>{description}</p>
            </CardContent>
        </Card>
    )
}
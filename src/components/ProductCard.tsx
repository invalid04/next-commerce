import { formatCurrency } from "@/lib/formatters";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export function ProductCard({ id, name, priceInCents, description }) {
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
            <CardFooter>
                <Button asChild size='lg' className='w-full'>
                    <Link href={`/purchase/${id}/purchase`}>
                        Purchase
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
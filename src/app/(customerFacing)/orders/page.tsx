import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MyOrdersPage() {
    return (
        <form>
            <Card>
                <CardHeader>
                    <CardTitle>My Orders</CardTitle>
                    <CardDescription>
                        Enter your email to receive your order history and download links
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className='space-y-2'>
                        <Label 
                            htmlFor='email'
                        >
                            Email
                        </Label>
                        <Input 
                            type='email'
                            required 
                            name='email'
                            id='email'
                        />
                    </div>
                </CardContent>

                <CardFooter></CardFooter>
            </Card>
        </form>
    )
}
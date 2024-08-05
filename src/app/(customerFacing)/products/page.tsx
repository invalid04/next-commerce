import { Suspense } from "react";

export function ProductPage() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Suspense fallback={
            <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
            </>
        }>
            <ProductsSuspense productsFetcher={productsFetcher} />
        </Suspense>
    </div>
    )
}
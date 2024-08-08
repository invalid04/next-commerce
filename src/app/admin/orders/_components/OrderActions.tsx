'use client'

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export function DeleteDropDownItem({
    id
}: {
    id: string
}) {

    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    return (
        <DropdownMenuItem>
            Delete
        </DropdownMenuItem>
    )
}
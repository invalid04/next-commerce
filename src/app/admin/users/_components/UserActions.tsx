import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export function DeleteDropDownItem() {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    return (
        <DropdownMenuItem
            disabled={isPending}
            
        >
            Delete
        </DropdownMenuItem>
    )
}
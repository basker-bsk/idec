import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react"

function MailIcon() {
    return <Button><Mail className="mr-2 h-4 w-4" /> Login with Email</Button>
}

export default function Buttons() {
    const buttonTypes = [
        {
            type: "default",
            size: ['sm', 'md', 'lg']
        },
        {
            type: "secondary",
            size: ['sm', 'md', 'lg']
        },
        {
            type: "outline",
            size: ['sm', 'md', 'lg']
        },
        {
            type: "destructive",
            size: ['sm', 'md', 'lg']
        },

    ]

    return <div className="flex flex-col w-full">
        <a id="buttons"></a>
        <h1>Buttons</h1>
        <div className="grid grid-cols-4 gap-4">
            {buttonTypes.map((types: any, tid: number) => (
                <div className="flex flex-col gap-4" key={`b-${tid}`}>
                    <h2 className="">{types.type}</h2>
                    {types.size.map((size: any, sid: number) => (
                        <>
                        {size}
                        <Button key={`s-${sid}`} variant={types.type} size={size} className="capitalize">{types.type}</Button>
                        </>
                    ))}
                </div>
            ))}

        </div>
    </div>
}
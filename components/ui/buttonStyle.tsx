import { Button } from "@/components/ui/button"

export default function ButtonStyle() {
    return (
        <>
            <div className="flex gap-4">
                <Button variant="default" size="lg">Learn More</Button>
                <Button variant="secondary" size="lg">Learn More</Button>
                <Button variant="destructive" size="lg">Learn More</Button>
                <Button variant="disabled" size="lg">Learn More</Button>
            </div>
            <div className="flex gap-4">
                <Button variant="default" size="lg"><span className="icon-Property-1Lock text-22 mr-4"></span> Learn More</Button>
                <Button variant="secondary" size="lg">Learn More <span className="icon-Property-1Lock text-18 ml-4"></span></Button>
                <Button variant="destructive" size="lg">Learn More</Button>
                <Button variant="default" size="icon"><span className="icon-Property-1Lock text-18"></span></Button>
            </div>
        </>
    )
}

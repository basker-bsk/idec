import { Button } from "@/components/ui/button"

export default function ButtonStyle() {
    return (
        <>            
            <div className="flex gap-4">
                <Button theme="primary" variant="iconText"><span className="icon-Property-1cart"></span> Learn More</Button>
                <Button theme="secondary" variant="iconText">Learn More <span className="icon-Property-1cart"></span></Button>
            </div>
            <div className="flex gap-4">
                <Button theme="primary" variant="icon"><span className="icon-Property-1cart"></span></Button>
                <Button theme="secondary" variant="icon"><span className="icon-Property-1cart"></span></Button>
                <Button theme="tertiary" variant="icon"><span className="icon-Property-1cart"></span></Button>
                <Button theme="disabled" variant="icon"><span className="icon-Property-1cart"></span></Button>
            </div>
        </>
    )
}

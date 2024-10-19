import { Button } from "@/components/ui/button"

export default function ButtonStyle() {
    return (
        <>            
            <div className="flex gap-4">
                <Button theme="primary"><span className="icon-Property-1cart"></span> Learn More</Button>
                <Button theme="secondary">Learn More <span className="icon-Property-1cart"></span></Button>
            </div>
            <div className="flex gap-4">
                <Button theme="primary"><span className="icon-Property-1cart"></span></Button>
                <Button theme="secondary"><span className="icon-Property-1cart"></span></Button>
                <Button theme="tertiary"><span className="icon-Property-1cart"></span></Button>
                <Button theme="disabled"><span className="icon-Property-1cart"></span></Button>
            </div>
        </>
    )
}

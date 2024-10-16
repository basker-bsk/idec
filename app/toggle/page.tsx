import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Toggle() {

    return (
        <div className="flex flex-col w-full">
            <a id="toggle"></a>
            <h1>Toggle</h1>
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
        </div>
    );
}

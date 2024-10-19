import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

function MailIcon() {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  );
}

export default function Buttons() {
  const buttonTypes = [
    {
      btype: "primary",  
      variant:''    
    },
    {
      btype: "secondary",      
      variant:''    
    },
    {
      btype: "tertiary",      
      variant:''    
    },
    {
      btype: "disabled",      
      variant:''    
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <a id="buttons"></a>
      <h1>Buttons</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {buttonTypes.map((btypes: any, tid: number) => (
          <div className="flex flex-col gap-2" key={`b-${tid}`}>
            <h2 className="">{btypes.btype}</h2>
            <Button theme={btypes.btype} variant={btypes.variant} className="capitalize">
                {btypes.btype}
              </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

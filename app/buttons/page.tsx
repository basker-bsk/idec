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
      btype: "primary"
    },
    {
      btype: "secondary"
    },
    {
      btype: "tertiary"
    },
    {
      btype: "disabled"
    },
  ];

  return (
    <div className="w-full">
      <a id="buttons"></a>
      <h4>Buttons</h4>
      <div className="flex">
        {buttonTypes.map((btypes: any, tid: number) => (
          <div className="mr-12" key={`b-${tid}`}>
            <p className="font-bold capitalize text-14">{btypes.btype}</p>
            <Button theme={btypes.btype}  >
                Learn more
              </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

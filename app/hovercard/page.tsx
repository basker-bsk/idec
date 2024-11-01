import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <div className="w-full">
      <a id="hoverCard"></a>
      <h4>Hover Card</h4>

      <HoverCard>
        <HoverCardTrigger>Hover here</HoverCardTrigger>
        <HoverCardContent>
          The React Framework created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

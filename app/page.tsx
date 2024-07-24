import { Button } from "@/components/ui/button";
import Accordian from "./accordian/page";
import Buttons from "./buttons/page";
import DatePicker from "./calendar/page";
import Modal from "./modal/page";
import CalendarForm from "./calendarForm/page";
import PopoverDemo from "./popover/page";
import { CardWithForm } from "./card/page";
import HoverCardDemo from "./hovercard/page";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4">
      <Accordian />
      <Buttons />
      <DatePicker />
      <Modal />
      <PopoverDemo />
      <CardWithForm />
      <HoverCardDemo />
    </main>
  );
}

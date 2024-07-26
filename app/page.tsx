import Accordian from "./accordian/page";
import Buttons from "./buttons/page";
import DatePicker from "./calendar/page";
import Modal from "./modal/page";
import PopoverDemo from "./popover/page";
import CardWithForm from "./card/page";
import HoverCardDemo from "./hovercard/page";
import FormWithZod from "./form/page";

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
      <FormWithZod />
    </main>
  );
}

import Accordian from "../accordian/page";
import Buttons from "../buttons/page";
import DatePicker from "../calendar/page";
import Modal from "../modal/page";
import PopoverDemo from "../popover/page";
import CardWithForm from "../card/page";
import HoverCardDemo from "../hovercard/page";
import FormWithZod from "../form/page";
import SkeletonCard from "../skeleton/page";
import Users from "../users/page";
import Counter from "../counter/page";
import Redis from "../Redis/page";
import Products from "../products-lists/page";
import Toggle from "../toggle/page";
import SelectBox from "../selectbox/page";
import RadioButton from "../radiobutton/page";
import ButtonStyle from "@/components/ui/buttonStyle";
import Typography from "../typography/page";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4">
      <Accordian />
      <Buttons />
      <ButtonStyle />
      {/* <DatePicker /> */}
      <Typography />
      <Modal />
      {/* <Products /> */}
      <PopoverDemo />
      <CardWithForm />
      <HoverCardDemo />
      <FormWithZod />
      <SkeletonCard />
      <Users />
      <Toggle />
      <div className="w-[180px]">
        <a id="selectbox"></a>
        <h4>Select Box</h4>
        <SelectBox />
      </div>
      <RadioButton />
      {/* <Counter /> */}
      {/* <Redis /> */}
    </main>
  );
}

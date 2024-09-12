import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Accordian() {
  const acc = [
    {
      title: "Is it accessible, It adheres to the WAI-ARIA design pattern.?",
      desc: "Yes. It adheres to the WAI-ARIA design pattern. Donec sit amet ipsum fermentum, ultrices magna ac, consectetur enim. Nullam id congue mi, in feugiat nibh. Phasellus at tristique sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vitae congue odio. Ut varius ante mauris, a fermentum nulla tristique sit amet. Vivamus diam lacus, porttitor ullamcorper finibus malesuada, accumsan et libero. Aliquam quis porta odio. Sed id lectus egestas, tincidunt justo sit amet, faucibus purus.",
    },
    {
      title:
        "Is it styled It comes with default styles that matches the other components?",
      desc: "Yes. It comes with default styles that matches the other components aesthetic. Morbi varius malesuada risus, id mattis nunc facilisis sit amet. Aliquam a laoreet dui. Vestibulum congue, diam non porta commodo, odio velit pretium nibh, vitae congue eros dolor vitae sem. Proin pellentesque justo ultricies, cursus quam ac, iaculis dui. Aliquam imperdiet pretium felis, et luctus diam dapibus ut. Aliquam cursus mi ut consectetur tempor. Fusce feugiat a massa eget tincidunt. Nam at neque ut orci fringilla semper eu sit amet ipsum. Maecenas sagittis justo nunc, in ornare nisl volutpat in. Maecenas venenatis elementum dignissim.",
    },
    {
      title: "Is it animated Morbi varius malesuada risus?",
      desc: "Yes. It's animated by default, but you can disable it if you prefer. Morbi varius malesuada risus, id mattis nunc facilisis sit amet. ",
    },
    {
      title: "Is it accessible Aliquam a laoreet dui?",
      desc: "Yes. It adheres to the WAI-ARIA design pattern. Aliquam a laoreet dui. Vestibulum congue, diam non porta commodo, odio velit pretium nibh, vitae congue eros dolor vitae sem. Proin pellentesque justo ultricies, cursus quam ac, iaculis dui. Aliquam imperdiet pretium felis, et luctus diam dapibus ut. Aliquam cursus mi ut consectetur tempor. Fusce feugiat a massa eget tincidunt. Nam at neque ut orci fringilla semper eu sit amet ipsum. Maecenas sagittis justo nunc, in ornare nisl volutpat in. Maecenas venenatis elementum dignissim.",
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <a id="accordian"></a>
      <h1>Accordian</h1>
      <Accordion type="single" collapsible className="w-full">
        {acc.map((ac: any, index: number) => (
          <AccordionItem value={`item-${index}`} key={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold">
              {ac.title}
            </AccordionTrigger>
            <AccordionContent className="text-[14px]">
              {ac.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

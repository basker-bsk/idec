import { Button } from "@/components/ui/button";

export default function ButtonStyle() {
  return (
    <>
      <div className="flex gap-4">
        <Button theme="primary" variant="iconText">
          <span className="icon-Download"></span> Learn More
        </Button>
        <Button theme="secondary" variant="iconText">
          Learn More <span className="icon-Filter"></span>
        </Button>
      </div>
      <div className="flex gap-4">
        <Button theme="primary" variant="icon">
          <span className="icon-Saved-Cart"></span>
        </Button>
        <Button theme="secondary" variant="icon">
          <span className="icon-cart"></span>
        </Button>
        <Button theme="tertiary" variant="icon">
          <span className="icon-search"></span>
        </Button>
        <Button theme="disabled" variant="icon">
          <span className="icon-chevron-right"></span>
        </Button>
      </div>
    </>
  );
}

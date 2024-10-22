import { Button } from "@/components/ui/button";
export default function Typography() {
  return (
    <div className="flex flex-col w-full my-4">
      <a id="Typography"></a>
      <h4>Typography</h4>
      <div className="flex flex-col gap-2 ">
        <h1>This is an example of H1</h1>
        <h2>This is an example of H2</h2>
        <h3>This is an example of H3</h3>
        <h4>This is an example of H4</h4>
        <p className="text-18 leading-18 md:text-20 md:leading-20">
          Body Large - Lorem ipsum dolor sit amet
        </p>
        <p className="text-16 leading-16 md:text-18 md:leading-18">
          Body Medium, - Lorem ipsum dolor sit amet
        </p>
        <p className="text-14 leading-14 md:text-16 md:leading-16">
          Body Normal - Lorem ipsum dolor sit amet
        </p>
        <p className="text-12 leading-12 md:text-14 md:leading-14">
          Body Small - Lorem ipsum dolor sit amet
        </p>

        <h4 className="mt-4">IDEC Gradient</h4>
        <div className="rounded-md w-full flex gradient p-8 justify-end">
          <Button theme="secondary" variant="icon">
            <span className="icon-cart"></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

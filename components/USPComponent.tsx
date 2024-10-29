import usp from "@/public/assets/data/usp.json";
export default function USP() {
  return (
    <div className="gray-bg-gradient w-full py-6">
      <div className="flex container mx-auto px-4 md:px-[50px] lg:px-[100px] items-center">
        <div className="flex gap-10 flex-col md:flex-row  items-center">
          <div className="text-18 leading-18 font-medium md:text-20 md:leading-[30px] w-full md:w-1/2">
            Trusted by many industries in creating the optimum environment for
            humans & machines.
          </div>
          <div className="flex gap-7 md:gap-12 w-full md:w-1/2">
            <div className="flex flex-col">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter1Prefix}
              </span>
              <span className="text-20 leading-20 md:text-24 md:leading-24 font-medium">
                {usp.counter1Text}
              </span>
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter1Suffix}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter2Prefix}
              </span>
              <span className="text-20 leading-20 md:text-24 md:leading-24 font-medium">
                {usp.counter2Text}
              </span>
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter2Suffix}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter3Prefix}
              </span>
              <span className="text-20 leading-20 md:text-24 md:leading-24 font-medium">
                {usp.counter3Text}
              </span>
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter3Suffix}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

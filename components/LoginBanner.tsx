import { Button } from "./ui/button";

export default function LoginBanner() {
  return (
    <div className="container mx-auto px-4 md:px-[50px]">
      <div className="gradient p-4 md:py-10 md:px-20 rounded-md flex flex-col md:flex-row justify-between gap-4 md:items-center ">
        <div className="text-white font-medium md:w-3/4">
          <h3 className="mb-1">
            Personalized experience & enjoy exclusive deals.
          </h3>
          <p className="text-14 leading-14 md:text-16 md:leading-16">
            Log in or create an account with us today for the access you need.
          </p>
        </div>
        <div>
          <Button theme="tertiary">Login / Signup</Button>
        </div>
      </div>
    </div>
  );
}

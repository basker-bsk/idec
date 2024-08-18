import Image from "next/image";
export default function Header() {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <Image
        src="/images/logo.jpg"
        width={150}
        height={100}
        alt="Picture of the author"
        className="w-[150px]"
      />
      <h2 className="font-bold">UI Components</h2>
    </div>
  );
}

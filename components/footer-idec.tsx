import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function FooterIdec() {
  const footerLinks = [
    {
      title: "About IDEC",
      links: [
        "CEO’s message",
        "Apem History",
        "APEM affiliates",
        "APEM presentation",
        "Our core business",
      ],
    },
    {
      title: "Resources & Documents",
      links: [
        "Apem History",
        "APEM affiliates",
        "Panel switches",
        "Apem History",
        "APEM affiliates",
        "Corporate Social Responsibility (CSR)",
        "Our core business",
      ],
    },
    {
      title: "OUR PRODUCTS",
      links: [
        "Panel switches",
        "Terms & conditions of sale",
        "APEM affiliates",
        "APEM presentation",
        "CEO’s message",
        "Apem History",
        "APEM affiliates",
        "APEM presentation",
        "Our core business",
      ],
    },
    {
      title: "About IDEC",
      links: [
        "CEO’s message",
        "Construction Machinery",
        "APEM affiliates",
        "APEM presentation",
        "Our core business",
      ],
    },
  ];
  return (
    <div className="flex bg-gray-200 px-4  flex-col">
      <div className="text-[12px] lg:text-[14px] container border-b border-gray-400 font-semibold">
        <div className="flex w-full flex-wrap gap-y-8 py-8 ">
          <div className="w-1/2 lg:w-1/4 flex flex-col gap-2">
            <Image
              src="/images/logo.jpg"
              width={150}
              height={100}
              alt="Picture of the author"
              className="w-[120px]"
            />
            <p>IDEC Corporation USA</p>
          </div>
          <div className="w-1/2 lg:w-1/4 flex flex-col">
            <p>1175 Elko Drive Sunnyvale,</p> <p>CA 94089-2209</p>
            <p>US/United States</p>
          </div>
          <div className="w-1/2 lg:w-1/4 flex flex-col lg:gap-4">
            <div className="flex gap-2">
              <p>T:</p>
              <div className="flex flex-col">
                <p>1-408-747-0550</p>
                <p>1-800-262-IDEC (4332)</p>
              </div>
            </div>
            <div className="flex gap-2">
              <p>F:</p>
              <div className="flex flex-col">
                <p>1-408-747-0550</p>
                <p>1-800-262-4332</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 lg:w-1/4 flex flex-col lg:gap-2">
            <p>Socials</p>
            <div className="flex gap-4">
              <Youtube className="h-4 w-4" />
              <Linkedin className="h-4 w-4 " />
              <Twitter className="h-4 w-4 " />
              <Facebook className="h-4 w-4 " />
            </div>
          </div>
        </div>
      </div>
      <div className="container border-b border-gray-400 font-semibold">
        <div className="flex w-full  py-8 ">
          <div className=" flex justify-between w-full flex-wrap gap-y-8">
            {footerLinks.map((nav, index) => (
              <div className="flex flex-col w-1/2 lg:w-1/4" key={`f-${index}`}>
                <h3 className="text-[12px] lg:text-[14px] mb-2 uppercase font-bold">
                  {nav.title}
                </h3>
                <ul className="text-[12px] flex lg:gap-2 flex-col font-medium">
                  {nav.links.map((link, index) => (
                    <li aria-hidden="true" className="" key={`fs-${index}`}>
                      <a href="/" title="">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container  border-b border-gray-400 py-2 flex justify-between text-[10px] lg:text-[12px]">
        <span>Terms & Conditions</span>
        <span>&copy; 2024 IDEC Corporation</span>
      </div>
    </div>
  );
}

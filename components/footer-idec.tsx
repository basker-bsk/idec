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
      title: "OUR PRODUCTS",
      links: [
        "Panel switches",
        "Apem History",
        "APEM affiliates",
        "APEM presentation",
        "Our core business",
      ],
    },
    {
      title: "OUR PRODUCTS",
      links: [
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
        "Apem History",
        "APEM affiliates",
        "APEM presentation",
        "Our core business",
      ],
    },
  ];
  return (
    <div className="flex bg-gray-200 px-4 font-bold flex-col">
      <div className="text-[16px] mx-auto w-[1360px] border-b border-gray-400">
        <div className="flex w-full gap-4 py-8 ">
          <div className="w-full lg:w-1/4 flex flex-col">
            <Image
              src="/images/logo.jpg"
              width={150}
              height={100}
              alt="Picture of the author"
              className="w-[120px]"
            />
            <p>IDEC Corporation USA</p>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col">
            <p>1175 Elko Drive Sunnyvale,</p> <p>CA 94089-2209</p>
            <p>US/United States</p>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col gap-4">
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
          <div className="w-full lg:w-1/4 flex flex-col gap-3">
            <p>Socials</p>
            <div className="flex gap-6">
              <Youtube className="h-6 w-6 " />
              <Linkedin className="h-6 w-6 " />
              <Twitter className="h-6 w-6 " />
              <Facebook className="h-6 w-6 " />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[16px] mx-auto w-[1360px] border-b border-gray-400">
        <div className="flex w-full gap-4 py-8 ">
          <div className="w-full lg:w-1/4 flex flex-col">
            <h3>THE APEM GROUP</h3>
            <ul className="footer__nav--links">
              <li aria-hidden="true" className="yCmsComponent footer__link">
                <a
                  href="/idec-apem/en_US/content/apem-presentation"
                  title="APEM presentation"
                >
                  APEM presentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import client from "@/config/contentful";
import Image from "next/image";
import Link from "next/link";
import { wait } from "@/lib/loadingdelay";

export default async function Fashion() {
  await wait(1000);
  const response = await client.getEntries();
  const fashionsList: any = response.items;
  console.log("response----++++++++++++-------", response.items);

  return (
    <>
      <div className="flex flex-col my-10 w-full px-4 lg:px-0">
        <h1 className="mb-4">INDUSTRIES</h1>
        <div className="justify-center items-center grid grid-cols-1 lg:grid-cols-3 gap-4">
          {fashionsList.map((fashion: any, sid: number) => (
            <>
              <Link href={`industries/${fashion.fields.slug}`}>
                <div
                  className=" flex flex-col gap-2 rounded-lg border-gray-500 p-4 bg-gray-300"
                  key={`menu-${sid}`}
                >
                  <Image
                    src={`https:${fashion.fields.thumbnail.fields.file.url}`}
                    alt="Content Image"
                    width={400}
                    height={200}
                    layout="responsive"
                    className="rounded-lg min-h-[200px]"
                  />
                  <h4>{fashion.fields.title}</h4>
                  <p>{fashion.fields.brief.substring(0, 50) + "..."}</p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

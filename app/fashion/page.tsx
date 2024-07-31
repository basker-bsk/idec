import client from "../../config/contentful";
import Image from "next/image";
import Link from "next/link";

export default async function Fashion() {
  const response = await client.getEntries();
  const fashionsList = response.items;
  console.log("response----++++++++++++-------", response.items);
  return (
    <>
      <div className="flex flex-col  w-full">
        <h1 className="mb-4">Fashion</h1>
        <div className="justify-center items-center grid grid-cols-1 lg:grid-cols-3 gap-4">
          {fashionsList.map((fashion: any, sid: number) => (
            <>
              <Link href={`fashion/${fashion.fields.slug}`}>
                <div
                  className="flex flex-col gap-2 rounded-lg border-gray-500 p-4 bg-gray-300"
                  key={`menu-${sid}`}
                >
                  <Image
                    src={`https:${fashion.fields.thumbnail.fields.file.url}`}
                    alt="Content Image"
                    width={400}
                    height={200}
                    layout="responsive"
                    className="rounded-lg"
                  />
                  <h2>{fashion.fields.title}</h2>
                  <p>{fashion.fields.brief}</p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

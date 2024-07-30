import Image from "next/image";
import client from "../../../config/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

export default async function Detail({ params }: { params: { slug: string } }) {
  const response = await client.getEntries();
  const fashionsDetail = response.items;
  const detail: any = fashionsDetail.find((fd: any) => {
    if (fd.fields.slug === params.slug) {
      return fd;
    }
  });
  console.log("-------", detail);

  const { title, brief, cI, description } = detail?.fields;

  return (
    <>
      <p>
        <Link href={"/fashion"}>Back to Fashion</Link>
      </p>
      <h1>{title.title}</h1>
      <p>{brief.brief}</p>
      <div className="justify-center items-center flex flex-col gap-4 mt-4">
        <>
          <div className="flex flex-col gap-2 ">
            <Image
              src={`https:${detail.fields.contentImage.fields.file.url}`}
              alt="Content Image"
              width={1000}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />
          </div>

          <p>{documentToReactComponents(description.description)}</p>
        </>
      </div>
    </>
  );
}

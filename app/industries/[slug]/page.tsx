import Image from "next/image";
import client from "@/config/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { wait } from "@/lib/loadingdelay";

export default async function Detail({ params }: { params: { slug: string } }) {
  await wait(2000);
  const response = await client.getEntries();
  const fashionsDetail = response.items;
  const detail: any = fashionsDetail.find((fd: any) => {
    if (fd.fields.slug === params.slug) {
      return fd;
    }
  });

  const { title, brief, cI, description } = detail?.fields;

  return (
    <div className="flex flex-col my-10 w-full px-4 lg:px-0">
      <p>
        <Link href={"/industries"}>Back to Industries</Link>
      </p>
      <h4>{detail.fields.title}</h4>
      <p>{detail.fields.brief}</p>
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

          <div>{documentToReactComponents(detail.fields.description)}</div>
        </>
      </div>
    </div>
  );
}

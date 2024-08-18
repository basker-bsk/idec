"use server";

import { client } from "@/lib/db";

export async function addProduct(data: any) {
  console.log("id, title, price, description, category, image", data);
  const { id, title, price, description, category, image } = data;

  // add the product to the sorted set
  const unique = await client.zAdd(
    "products",
    {
      value: title,
      score: id,
    },
    {
      NX: true,
    }
  );

  if (!unique) {
    return { error: "That product has already been added." };
  }

  // save new hash for the book
  await client.hSet(`product:${id}`, {
    id,
    title,
    price,
    description,
    category,
    image,
  });
}

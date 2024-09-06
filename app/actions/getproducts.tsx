"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/lib/db";

export default async function GetProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // try fetch cached data
  const cached = await client.get("prodcts");
  // if cached, we're good!
  if (cached) {
    return res.send(cached);
  }

  // fetch fresh data from the DB
  const data = await fetch("http://fakestoreapi.com/products");

  // cache data setting an expiry of 1 hour
  // this means that the cached data will remain alive for 60 minutes
  // after that, we'll get fresh data from the DB
  const MAX_AGE = 60_000 * 60; // 1 hour
  const EXPIRY_MS = `PX`; // milliseconds

  // cache data
  await client.set("prodcts", JSON.stringify(data));

  // return data to client
  return res.send(data);
}

"use client";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../app/GlobalRedux/Features/Cart/cartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

export default function CartProduct({ cartItem }: any) {
  const dispatch = useDispatch();
  function handleRemoveCartItem(cartId: number) {
    dispatch(removeFromCart(cartId));
  }
  function handleIncrementQty(cartId: number) {
    dispatch(incrementQty(cartId));
  }
  function handleDecrementQty(cartId: number) {
    dispatch(decrementQty(cartId));
  }
  return (
    <div className="flex w-full md:items-center gap-4 md:justify-between border-b flex-col md:flex-row border-slate-400  pb-3 font-medium text-sm mb-4">
      <Link
        href={`products/${cartItem.id}`}
        className="flex md:items-center gap-3 md:w-1/2"
      >
        <Image
          src={cartItem.image}
          width={249}
          height={249}
          alt={cartItem.title}
          className="border p-2 border-gray-300 bg-white w-20 h-20 rounded-md"
        />
        <div className="flex">
          <p>{cartItem.title}</p>
        </div>
      </Link>
      <div className="flex justify-between gap-4">
        <div className="flex items-center ">
          <div className=" rounded-md border border-gray-400 flex ">
            <button
              onClick={() => handleDecrementQty(cartItem.id)}
              className="border-r border-gray-400 py-2 px-4"
            >
              <Minus />
            </button>
            <p className=" py-2 px-4">{cartItem.qty ?? 1}</p>
            <button
              onClick={() => handleIncrementQty(cartItem.id)}
              className="border-l border-gray-400 py-2 px-4"
            >
              <Plus />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h4>${cartItem.price}</h4>
          <button onClick={() => handleRemoveCartItem(cartItem.id)}>
            <Trash2 className="text-red-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

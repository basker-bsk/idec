"use client";
import CartProduct from "@/components/cartProduct";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state: any) => state.cart);
  const totalPrice = cartItems.reduce((accumulator: any, currentItem: any) => {
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);
  console.log(cartItems);
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">
        <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
        <div className="hidden md:flex items-center  justify-between border-b border-slate-400 text-slate-400 pb-3  mb-4">
          <div>Product</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>
        <div className="flex flex-col w-full">
          {cartItems.map((item: any, i: number) => {
            return <CartProduct key={i} cartItem={item} />;
          })}
        </div>
        {/* COUPON FORM */}
        <div className="flex items-center gap-2 py-8">
          <input
            type="text"
            id="coupon"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2"
            placeholder="Enter Coupon"
          />
          <button className="shrink-0 py-2.5 px-4 rounded-lg bg-lime-600">
            Apply Coupon
          </button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 sm:block bg-white border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden p-5 dark:text-slate-100 font-bold">
        <h2 className="text-2xl pb-3">Cart total</h2>
        <div className="flex items-center justify-between border-b border-slate-500 pb-6">
          <span>Subtotal </span>
          <span>${totalPrice}</span>
        </div>
        <div className="flex items-center justify-between pb-4 mt-2">
          <span>Tax </span>
          <span>$0</span>
        </div>
        <div className="flex items-center justify-between pb-4">
          <span>Shipping </span>
          <span>$10</span>
        </div>
        <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal">
          We only charge for shipping when you have over 2kg items
        </p>
        <div className="flex items-center justify-between py-4 font-bold">
          <span>Total </span>
          <span>$1000</span>
        </div>
        <Link
          href="#"
          className="bg-slate-200 text-slate-900 rounded-lg py-2 px-4 font-normal"
        >
          Continue to Payment
        </Link>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function CartLength() {
  const cartItems = useSelector((state: any) => state.cart);
  const cartLength = cartItems.length;
  return <span>{cartLength}</span>;
}

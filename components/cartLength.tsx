"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function CartLength() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = useSelector((state: any) => state.cart);
  const cartLength = cartItems.length;
  return <span>{isClient ? cartLength : 1}</span>;
}

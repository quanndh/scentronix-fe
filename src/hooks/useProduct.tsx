"use client";

import { products } from "@/mocks";

export default function useProduct() {
  return {
    data: products,
  };
}

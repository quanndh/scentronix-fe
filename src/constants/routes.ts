"use client";

export const routes = {
  shop: "/shop",
  recipes: "/recipes",
  detail: (id: number | string) => `/recipes/${id}`,
};

export const menuItems = [
  {
    label: "SHOP",
    path: "/",
  },
  {
    label: "RECIPES",
    path: routes.recipes,
  },
];

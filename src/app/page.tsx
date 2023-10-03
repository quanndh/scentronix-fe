import HomeScreen from "@/modules/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food you love",
  description: "Fooood you love",
  icons: "https://cdn-icons-png.flaticon.com/512/2915/2915852.png",
};

export default function Home() {
  return <HomeScreen />;
}

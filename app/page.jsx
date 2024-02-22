import Image from "next/image";
// import styles from "./page.module.css";
import * as Comps from "@/components";

const DATA = [
  "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-11_900x.jpg?v=1649078981",
  "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-15_720x.jpg?v=1649078981",
  "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-6_900x.jpg?v=1649078981",
];

export default function Home() {
  return (
    <main className="padY-xxxl">
      <div className="grid">
        <Comps.Slider data={DATA} />
        <Comps.ProductDetail />
      </div>
      <Comps.WriteReview />
      <Comps.Reviews />
    </main>
  );
}

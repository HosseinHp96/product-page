import Image from "next/image";
// import styles from "./page.module.css";
import * as Comps from "@/components";

const DATA = [
  "https://picsum.photos/seed/random101/500/500",
  "https://picsum.photos/seed/random102/500/500",
  "https://picsum.photos/seed/random103/500/500",
];

export default function Home() {
  return (
    <main>
      <Comps.Slider data={DATA} />
      <Comps.ProductDetail />
      <Comps.WriteReview />
      <Comps.Reviews />
    </main>
  );
}

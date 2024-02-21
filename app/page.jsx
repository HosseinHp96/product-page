import Image from "next/image";
// import styles from "./page.module.css";
import * as Comps from "@/components";

const DATA = [
  { image: "https://picsum.photos/seed/random101/500/500" },
  { image: "https://picsum.photos/seed/random102/500/500" },
  { image: "https://picsum.photos/seed/random103/500/500" },
];

export default function Home() {
  return (
    <main>
      {/* <Comps.Slider data={DATA} /> */}
      <div style={{ background: "red", width: 50, height: 50 }}></div>

      <Comps.ProductDetail />
      <Comps.WriteReview />
      <Comps.Reviews />
    </main>
  );
}

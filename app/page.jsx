import Image from "next/image";
// import styles from "./page.module.css";
import { fetchProductById, fetReviewsById } from "@/libs/data";
import * as Comps from "@/components";

// const DATA = [
//   "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-11_900x.jpg?v=1649078981",
//   "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-15_720x.jpg?v=1649078981",
//   "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-6_900x.jpg?v=1649078981",
// ];

export default async function Home() {
  /* We need to create a [id] folder
  and get the product ID as a function parameter
  and pass it to the fetchProductById function */
  const productData = await fetchProductById();
  const reviews = await fetReviewsById();

  return (
    <main className="padY-xxxl">
      <div className="grid">
        <Comps.Slider data={productData.images} />
        <Comps.ProductDetail data={productData} />
      </div>
      <Comps.ProductReviews data={reviews} />
    </main>
  );
}

import { fetchProductById, fetReviewsById } from "@/libs/data";
import * as Comps from "@/components";

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

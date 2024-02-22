import Reviews from "./reviews";
import WriteReview from "./writeReview";
import StarRating from "../starRating";

const ProductReviews = () => {
  return (
    <section>
      <div>
        <div className="scontainer w100 flex flex-column align-i-center">
          <div className="marY-sm align-center">
            <h2 className="app-text-xl">PRODUCT REVIEWS</h2>
            <StarRating rate={5} starSize={'1.5rem'} />
          </div>
        </div>

        <WriteReview />

        <Reviews />
      </div>
    </section>
  );
};

export default ProductReviews;

import Color from "./color";
import Size from "./size";
import styles from "./index.module.scss";
import Description from "./description";
import StarRating from "../starRating";

const ProductDetail = () => {
  return (
    <section>
      <div
        className={`container flex flex-column grid-item ${styles["pd-container"]}`}
      >
        <h1 className="app-text-xl align-center marB-xs">
          By Anthropologie Tweed Appliqué Blazer
        </h1>

        <div className="app-text-lg align-center fw-b marB-xs">£27.99</div>

        <hr className="divider marB-xs" />

        <div className="marB-xs align-center">
          <StarRating rate={5} starSize={"1.5rem"} />
        </div>

        <Size />

        <Color />

        <button className="btn primary__btn marY-lg">ADD TO BAG</button>

        <Description />
      </div>
    </section>
  );
};

export default ProductDetail;

import Color from "./color";
import Size from "./size";
import styles from "./index.module.scss";
import Description from "./description";
import StarRating from "../starRating";

const ProductDetail = ({ data }) => {
  return (
    <section>
      <div
        className={`container flex flex-column grid-item ${styles["pd-container"]}`}
      >
        <h1 className="app-text-xxl align-center marB-xs">{data.name}</h1>

        <div className="app-text-xl align-center fw-b marB-xs">
          {data.price}
        </div>

        <hr className="divider marB-xs" />

        <div className="marB-xs align-center">
          <StarRating constantRate={data.rating} starSize={"1.5rem"} />
        </div>

        <Size data={data.sizes} />

        <Color data={data.colors} />

        <button className="btn primary__btn marY-lg">ADD TO BAG</button>

        <Description data={data.description} />
      </div>
    </section>
  );
};

export default ProductDetail;

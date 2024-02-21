import Color from "./color";
import Size from "./size";

const ProductDetail = () => {
  return (
    <section>
      <div className="container flex flex-column">
        <h1 className="app-text-xl align-center marB-xs">
          By Anthropologie Tweed Appliqué Blazer
        </h1>

        <div className="app-text-lg align-center fw-b marB-xs">£27.99</div>

        <hr className="divider marB-xs" />

        <Size />

        <Color />

        <button className="btn primary__btn marY-lg">ADD TO BAG</button>
      </div>
    </section>
  );
};

export default ProductDetail;

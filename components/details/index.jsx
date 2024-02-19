import Color from "./color";
import Size from "./size";

const Details = () => {
  return (
    <section>
      <div className="container flex flex-column">
        <h1 className="app-text-lg align-center marB-xs">
          By Anthropologie Tweed Appliqué Blazer
        </h1>

        <div className="app-text-md align-center fw-b">£27.99</div>

        <hr className="divider" />

        <Size />

        <Color />

        <button className="btn primary__btn marY-lg">ADD TO BAG</button>
      </div>
    </section>
  );
};

export default Details;

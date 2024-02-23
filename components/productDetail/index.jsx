"use client";

import { useEffect } from "react";
import Color from "./color";
import Size from "./size";
import styles from "./index.module.scss";
import Description from "./description";
import StarRating from "../starRating";
import { useAppContext } from "@/context/state";

const ProductDetail = ({ data }) => {
  const { shoppingBag, setshoppingBag } = useAppContext();

  const addTOBag = (formData) => {
    const product = {
      color: formData.get("color"),
      size: formData.get("size"),
      product: data.name,
    };

    setshoppingBag((val) => [...val, product]);
  };

  useEffect(() => {
    console.log(shoppingBag);
  }, [shoppingBag]);

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

        <form action={addTOBag}>
          <Size data={data.sizes} />

          <Color data={data.colors} />

          <button type="submit" className="btn primary__btn marY-lg w100">
            ADD TO BAG
          </button>
        </form>

        <Description data={data.description} />
      </div>
    </section>
  );
};

export default ProductDetail;

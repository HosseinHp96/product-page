"use client";

import { useState, useRef } from "react";
import styles from "./index.module.scss";
import StarRating from "../../starRating";
import { Drawer } from "../..";
import { createReview } from "@/libs/action";

const WriteReview = () => {
  const contentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container flex flex-column w100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn secondary__btn marB-lg"
      >
        {isOpen ? "CANSEL" : "WRITE A"} REVIEW
      </button>

      <Drawer isOpen={isOpen} contentRef={contentRef}>
        <form action={createReview}>
          <div className={styles["write-review-content"]}>
            <StarRating initialRate={5} />

            <textarea
              className="c-textarea"
              name="comment"
              cols="30"
              rows="10"
              placeholder="Write your commnet here"
              required
              minLength={3}
            ></textarea>

            <input
              name="review-author"
              placeholder="Write your name"
              type="text"
              className="c-input"
              required
              minLength={3}
            />

            <button
              type="submit"
              className="btn primary__btn marY-lg"
              style={{ padding: "10px 25px" }}
            >
              SUBMIT REVIEW
            </button>
          </div>
        </form>
      </Drawer>
    </div>
  );
};

export default WriteReview;

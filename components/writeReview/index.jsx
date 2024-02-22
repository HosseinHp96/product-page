"use client";

import { useState, useRef } from "react";
import styles from "./index.module.scss";
import StarRating from "../starRating";
import { Drawer } from "..";

const WriteReview = ({ rate, starSize }) => {
  const contentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="container flex flex-column w100">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn secondary__btn marY-lg"
        >
          {isOpen ? "CANSEL" : "WRITE A"} REVIEW
        </button>

        <Drawer isOpen={isOpen} contentRef={contentRef}>
          <div className={styles["write-review-content"]}>
            <StarRating />

            <textarea
              className="c-textarea"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your commnet here"
            ></textarea>

            <input
              placeholder="Write your name"
              type="text"
              className="c-input"
            />

            <button
              className="btn primary__btn marY-lg"
              style={{ padding: "10px 25px" }}
            >
              SUBMIT REVIEW
            </button>
          </div>
        </Drawer>
      </div>
    </section>
  );
};

export default WriteReview;

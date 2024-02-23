"use client";

import { useState } from "react";
import styles from "./index.module.scss";

const StarRating = ({ initialRate, constantRate, starSize }) => {
  const [rating, setRating] = useState(constantRate || initialRate);
  const [hover, setHover] = useState(null);

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              defaultChecked={initialRate && initialRate === index + 1}
              onChange={() => setRating(currentRating)}
            />
            <span
              className={styles.star}
              style={{
                color: currentRating <= (hover || rating) ? "#000" : "#e4e5e9",
                fontSize: starSize,
              }}
              onMouseEnter={() => setHover(constantRate || currentRating)}
              onMouseLeave={() => setHover(constantRate || null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

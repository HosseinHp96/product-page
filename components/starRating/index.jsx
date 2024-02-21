"use client";

import { useState } from "react";
import styles from "./index.module.scss";

const StarRating = ({ rate, starSize }) => {
  const [rating, setRating] = useState(rate);
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
              onChange={() => setRating(currentRating)}
            />
            <span
              className={styles.star}
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                fontSize: starSize,
              }}
              onMouseEnter={() => setHover(rate || currentRating)}
              onMouseLeave={() => setHover(rate || null)}
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

"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import NavBtns from "./navBtns";

const Slider = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImg = () => {
    setImageIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImg = () => {
    setImageIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });
  };

  return (
    <div className={`${styles["slider-container"]} marB-lg grid-item`}>
      <div className={styles["slider-wrap"]}>
        <div className={styles["slider-main"]}>
          {data.map((url, key) => (
            <div key={key} className={styles["slider-img-wrap"]}>
              <Image
                className={styles["slider-img"]}
                width={500}
                height={500}
                alt={`slider image ${key}`}
                src={url}
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            </div>
          ))}
        </div>

        <NavBtns showPrevImg={showPrevImg} showNextImg={showNextImg} />
      </div>
    </div>
  );
};

export default Slider;

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const Stage = ({ data, currentImg }) => {
  const [sliderSize, setsliderSize] = useState({ width: 0, height: 0 });
  const sliderRef = useRef(null);

  // useEffect to get the initial Slider size
  useEffect(() => {
    let elem = sliderRef.current;
    let { width, height } = elem.getBoundingClientRect();
    if (sliderRef.current) {
      setsliderSize({
        width,
        height,
      });
    }
  }, []);

  return (
    <div className={styles["stage-container"]}>
      <div
        ref={sliderRef}
        style={{
          left: -currentImg * sliderSize.width,
        }}
        className={styles["images-container"]}
      >
        {data.map((v, i) => (
          <div key={i} className={styles["image-wrapper"]}>
            <Image
              className={styles.image}
              alt={`slider-image-${i}`}
              fill
              src={v.image || "https://random.imagecdn.app/500/500"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stage;

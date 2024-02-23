"use client";

import { useRef, useState } from "react";
import { Drawer } from "..";
import styles from "./index.module.scss";

const Description = ({ data }) => {
  const contentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="marB-lg" style={{ cursor: "pointer" }}>
      <h4 onClick={() => setIsOpen(!isOpen)} className="flex jcb marB-xs">
        <div>DESCRIPTION</div>

        <div>{isOpen ? "-" : "+"}</div>
      </h4>
      <Drawer isOpen={isOpen} contentRef={contentRef}>
        <ul className={styles["description-container"]}>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

export default Description;

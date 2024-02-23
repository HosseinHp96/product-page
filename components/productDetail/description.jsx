"use client";

import { useRef, useState } from "react";
import { Drawer } from "..";

const Description = ({ data }) => {
  const contentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="marB-lg" style={{ cursor: "pointer" }}>
      <h4 onClick={() => setIsOpen(!isOpen)} className="flex jcb">
        <div>DESCRIPTION</div>

        <div>{isOpen ? "-" : "+"}</div>
      </h4>
      <Drawer isOpen={isOpen} contentRef={contentRef}>
        <div>{data}</div>
      </Drawer>
    </div>
  );
};

export default Description;

"use client";

import { useRef, useState } from "react";
import { Drawer } from "..";

const Description = () => {
  const contentRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ cursor: "pointer" }}>
      <h4 onClick={() => setIsOpen(!isOpen)} className="flex jcb">
        <div>DESCRIPTION</div>

        <div>{isOpen ? "-" : "+"}</div>
      </h4>
      <Drawer isOpen={isOpen} contentRef={contentRef}>
        <div>
          Relaxed knitted cardigan Stripes in brown and green Distressed rib
          detail V-neck Front button through opening Loose fit Long sleeves 70%
          acrylic, 30% wool Relaxed knitted cardigan Stripes in brown and green
          Distressed rib detail V-neck Front button through opening Loose fit
          Long sleeves 70% acrylic, 30% wool Relaxed knitted cardigan Stripes in
          brown and green Distressed rib detail V-neck Front button through
          opening Loose fit Long sleeves 70% acrylic, 30% wool Relaxed knitted
          cardigan Stripes in brown and green Distressed rib detail V-neck Front
          button through opening Loose fit Long sleeves 70% acrylic, 30% wool
        </div>
      </Drawer>
    </div>
  );
};

export default Description;

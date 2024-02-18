"use client";
import { useState } from "react";

import Stage from "./stage";
import NavBtns from "./navBtns";

const Slider = ({ data }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div>
      <Stage data={data} currentImg={currentImg} />
      <NavBtns
        data={data}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
      />
    </div>
  );
};

export default Slider;

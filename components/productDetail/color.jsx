import ColorRadioBtn from "../buttons/colorRadioBtn";

const Color = ({ data }) => {
  return (
    <div className="flex flex-column align-i-center marB-lg">
      <h5 className="marB-xs">COLOR</h5>

      <ul className="flex">
        <div style={{ gap: "10px 15px" }} className="flex flex-wrap jcc">
          {data.map((color, index) => (
            <ColorRadioBtn
              value={color}
              defaultValue={data[0]}
              key={index}
              name="color"
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Color;

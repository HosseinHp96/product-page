import ColorRadioBtn from "../buttons/colorRadioBtn";

const colors = [
  "#e0190b",
  "#262222",
  "#271b96",
  "#5f118c",
  "#2e6362",
  "#3a0e5e",
];

const Color = () => {
  return (
    <div className="flex flex-column align-i-center marB-lg">
      <h5 className="marB-xs">COLOR</h5>

      <ul className="flex">
        <form style={{ gap: "10px 15px" }} className="flex flex-wrap jcc">
          {colors.map((color, id) => (
            <ColorRadioBtn value={color} key={id} />
          ))}
        </form>
      </ul>
    </div>
  );
};

export default Color;

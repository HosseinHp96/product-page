import ColorRadioBtn from "../buttons/colorRadioBtn";

const Color = ({ data }) => {
  return (
    <div className="flex flex-column align-i-center marB-lg">
      <h5 className="marB-xs">COLOR</h5>

      <ul className="flex">
        <form style={{ gap: "10px 15px" }} className="flex flex-wrap jcc">
          {data.map((color, id) => (
            <ColorRadioBtn value={color} key={id} />
          ))}
        </form>
      </ul>
    </div>
  );
};

export default Color;

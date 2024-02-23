import TextRadioBtn from "../buttons/textRadioBtn";

const Size = ({ data }) => {
  return (
    <div className="flex flex-column align-i-center marB-xs">
      <h5 className="marB-xs">SIZE</h5>

      <div className="flex flex-wrap jcc">
        {data.map((size, index) => (
          <TextRadioBtn
            value={size}
            id={index}
            defaultValue={data[0]}
            key={index}
            name="size"
          />
        ))}
      </div>
    </div>
  );
};

export default Size;

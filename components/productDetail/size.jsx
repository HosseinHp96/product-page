import TextRadioBtn from "../buttons/textRadioBtn";

const Size = ({ data }) => {
  return (
    <div className="flex flex-column align-i-center marB-xs">
      <h5 className="marB-xs">SIZE</h5>

      <form className="flex flex-wrap jcc">
        {data.map((size, id) => (
          <TextRadioBtn name={size} key={id} />
        ))}
      </form>
    </div>
  );
};

export default Size;

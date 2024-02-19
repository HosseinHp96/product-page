import TextRadioBtn from "../buttons/textRadioBtn";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const Size = () => {
  return (
    <div className="flex flex-column align-i-center">
      <h5 className="marB-xs">SIZE</h5>

      <form className="flex jcc">
        {sizes.map((size, id) => (
          <TextRadioBtn name={size} key={id} />
        ))}
      </form>
    </div>
  );
};

export default Size;
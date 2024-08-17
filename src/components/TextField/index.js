import "./TextField.css";

const TextField = (props) => {
  const placeholderText = `${props.placeholder}...`;

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input type="text" placeholder={placeholderText} />
    </div>
  );
};

export default TextField;

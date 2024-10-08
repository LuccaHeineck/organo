import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;

import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os daods para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Enter your name" />
        <TextField label="Cargo" placeholder="Enter your position" />
        <TextField label="Imagem" placeholder="Enter a image" />
      </form>
    </section>
  );
};

export default Form;

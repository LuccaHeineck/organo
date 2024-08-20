import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const times = [
    "Programação",
    "UX/UI",
    "Desenvolvimento",
    "Devops",
    "Data Science",
    "Mobile",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
    // Ação ao salvar
    console.log("Salvando card...", nome, cargo, imagem, time);
    // Implementar ação de salvar no backend
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          value={nome}
          aoAlterado={(valor) => setNome(valor)}
          required={true}
          label="Nome"
          placeholder="Enter your name"
        />
        <TextField
          value={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          required={true}
          label="Cargo"
          placeholder="Enter your position"
        />
        <TextField
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Enter a image"
        />
        <Dropdown
          value={time}
          aoAlterado={(valor) => setTime(valor)}
          label="Time"
          itens={times}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;

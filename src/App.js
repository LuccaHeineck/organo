import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovo = (novoColaborador) => {
    setColaboradores([...colaboradores, novoColaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Form aoCadastrar={(colaborador) => aoNovo(colaborador)} />
    </div>
  );
}

export default App;

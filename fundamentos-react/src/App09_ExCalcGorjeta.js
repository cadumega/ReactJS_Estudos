// Calculadora de gorjeta.
// Exibição condicional, usando duas states com a conta e outra que tem a porcentagem
// 2 campos inputs type number
// ao digitar vem como string, depois transformar para number.


import React,{useState} from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: Arial;
  color: royalblue;
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.1rem;
`;

let App = () => {
  const [conta, setConta] = useState(0);
  const [percent, setPercent] = useState(10);

  const gorjeta = Number((percent / 100) * conta);
  return (
    <>
      <Title>Calculadora de Gorjeta</Title>

      <p>Quanto deu a conta?</p>
      <Input
        type="number"
        value={conta}
        onChange={e => setConta(e.target.value)}
      />

      <p>Qual a percentagem de gorjeta?</p>
      <Input
        type="number"
        value={percent}
        onChange={e => setPercent(e.target.value)}
      />
      <hr />

      {conta > 0 && (
        <div>
          <p>Sub-total: R$ {conta}</p>
          <p>
            Gorjeta({percent}%): R$ {gorjeta};
          </p>
          <p>Total: R$ {Number(conta) + gorjeta} </p>
        </div>
      )}
    </>
  );
};

export default App;
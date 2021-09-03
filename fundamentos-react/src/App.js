
// React hooks são atalhos, facilidades 
// Tudo é indireto, alteramos 
// useState é similar a prop, a prop ao passar ao componente recebe a prop e não pode ser modificada. Com useState vc consegue alterar o valor para mudar na interface.
// 1° o nome da minha variavel e o 2° a função para modificar essa variavel nessa array que criei.

import React,{useState} from "react";
import styled from 'styled-components';


function App() {

    const [ contagem, setContagem ] = useState(0);
    
    const botaoAction = () => {
        setContagem( contagem + 1)
    };


    return (
      <>
        <div> {contagem} vezes</div>
        <button onClick={botaoAction}> Clique para aumentar</button>
      </>
    );
}

export default App;
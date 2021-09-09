//Ciclo de vida de um componente UseEffect, lidar com efeitos, com as etapadas do ciclo de vida.

import react, {useState, useEffect} from 'React';
import styled from 'styled-components';

function App() {

    const[contagem, setContagem] = UseState(0);

    useEffect(()=> {
        document.title='Contagem: '+contagem;
    }, [contagem])

    function aumentarAction () {
        setContagem(contagem +1);                    //incremento 
    }



  return (
    <>
        <h1>Contagem: {contagem}</h1>
        <button onClick={aumentarAction}>Aumentar Número</button>
    
    </>
  );
}

export default App;



//DocumentTitle para mudar título
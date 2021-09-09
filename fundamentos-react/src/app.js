//Ciclo de vida de um componente UseEffect, lidar com efeitos, com as etapadas do ciclo de vida.
//Por exemplo carregar feed, useEffect irá fazer a requisição para puxar o Feed. Webservice,banco de dados que irá puxar essas informações. 
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function App() {

    const[contagem, setContagem] = useState(0);

    useEffect(()=> {
      if(contagem==0) {
          document.title='Comelou a brincadeira!';
      } else {
          document.title="Contagem: "+contagem;
      }  
    }, [contagem])

    function aumentarAction () {
        setContagem(contagem +1);
    }

    // return () => {
    // Qd o componente for destruido
    // };

    return (
        <>
            <h1>Contagem: {contagem}</h1>
            <button onClick={aumentarAction}>Aumentar Número</button>
        
        </>
    );
}

export default App;



//DocumentTitle para mudar título
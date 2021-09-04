 // Condicao nao satisfeita nao exibe o componente
  // qd for um nao poe nada, qd for diferente de 1 acrescenta s, exibir   //condicional de verificacao

 import React,{useState} from "react";
import styled from 'styled-components';

const Input = styled.input `
    width:400px;
    height:30px;
    font-size:16px;
    padding:10px;
    border:1px solid #000;
`;


function App() {

    const [ email, setEmail] = useState('');
    const [ isLogged, setIsLogged] = useState(false);

    const handleInputMail = (e) => {
        setEmail(e.target.value);
    };

    return (
      <>
        <Input placeholder="Digite um e-mail" type="text" value={email} onChange={handleInputMail} />

        {email.length > 0 &&
        <div>
            <p>{email.length} caractere{ email.length != 1 ? 's' : ''}</p>      
            {/* <p> aviso alguma coisa </p> */}
        </div>
        }

        {/* {isLogged == true &&
            <button>Sair</button>
        }
        {isLogged ==false &&
            <button> Fazer login </button>
        } */}

        { isLogged 
        ? <button>Sair</button>         // condicao de satisfacao
        : <button>Fazer login</button>
        }

      </>
    );
}

export default App;
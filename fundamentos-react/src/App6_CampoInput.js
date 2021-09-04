
// No campo de texto, qd digitar algo vou mostrando abaixo qts caracteres estão sendo digitados. Atrelar o conteúdo do campo em um useState.
// atribuo value ao texto
// atrelei o state ao meu campo value.
//pegar o que esta digitando
//tela de login, um useState para login e senha


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
    const [ password, setPassword] = useState('');

    const handleInputMail = (e) => {
        setEmail(e.target.value);
    };
    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    };
    const handleButton = () => {
        alert(email+'-'+password)
    }

    return (
      <>
        <Input placeholder="Digite um e-mail" type="text" value={email} onChange={handleInputMail} />
        
        <Input placeholder="Digite uma senha" type="password" value={password} onChange={handleInputPassword} />

        <button onClick={handleButton}> Dizer </button>
        <p>{email.length} caracteres</p>
      </>
    );
}

export default App;
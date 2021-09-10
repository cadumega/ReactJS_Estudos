// JSX só pode retornar um unico elemento
// <div> === <>
// Criei fora a fç formatarNome  para passar junto com a variavel usuario e suas propriedades dentro do objeto.
//Combinacoes de variaveis, objetos ,funcoes,html

import React from "react";

function formatarNome(usuario) {
    return usuario.nome+' '+usuario.sobrenome;
}

function App() {
    let usuario = {
         nome:'Carlos',
         sobrenome:'Lopes',
         idade: 99
    };

    let imagem ='https://www.google.com.br/google.jpg';

    return <>
        <div>Meu nome é {formatarNome(usuario)}.</div>
        <div>{1+1}</div>
        <img src={imagem}/>
    </>;
}

export default App;



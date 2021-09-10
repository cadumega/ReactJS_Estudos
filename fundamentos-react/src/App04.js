// ATENCAO ao import "./App.css" para nao dar falha de compiled.


import React from "react";
import "./App.css";

function BemVindo(props) {
    return <h1>Olá, {props.nome}! Você tem {props.idade} anos.</h1>
}

function Avatar(props2) {
    return (
    <div className='avatar'>
        {/* <img src={props2.url} atl={props2.name} />
        <span>{props2.name}</span> */}

        <img src={props2.user.url} atl={props2.user.name} />
        <span>{props2.user.name}</span>
    </div>
  )
}

function App() {
    let user = {
        url: 'https://www.google.com.br/google.jpg' ,
        name: 'Carlos Lopes'
    };

    return <>
        {/* <Avatar url={user.url} name={user.name}/> */}
        <Avatar user={user}/>
    </>;
}

// Passo a prop dentro do meu objeto usuário 

export default App;



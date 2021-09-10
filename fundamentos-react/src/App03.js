// Conceito chamado Props, criamos o componente App
// Usei o componente dentro do meu App(), posso usar qts vezes quiser
// Passar uma prop dentro do componente. add um parametro props
// tera todas as props que foram passadas no meu componente.
// Se vc não for passar nada no children não põe a tag de fechamento (tem que lembrar que isso é JSX e não HTML, por isso até mesmo em divs, se vc não passar nada dentro delas, é melhor usar a forma auto-fechada (embora ele suporte deixar o children vazio tbm com a tag de fechamento)).


import React from "react";

function BemVindo(props) {
    return <h1>Olá, {props.nome}! Você tem {props.idade} anos.</h1>
}

function Avatar(props2) {
    return (
    <>
        {/* <img src={props2.url} atl={props2.name} />
        <span>{props2.name}</span> */}

        <img src={props2.user.url} atl={props2.user.name} />
        <span>{props2.user.name}</span>
    </>
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



// Passei essa prop para o meu componente padrão SearchBox

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';    // agora que importei posso usar

function App() {

    return (
    <>
        <h1>Lista de tarefas </h1>

        {<SearchBox frasePadrao="Faça sua busca..."/> }        

        {<SearchBox frasePadrao="Digite o seu nome"/> }        

        {<SearchBox/> }
    </>
    );
}

export default App;

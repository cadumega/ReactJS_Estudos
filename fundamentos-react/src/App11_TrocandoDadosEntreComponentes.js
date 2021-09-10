// Passei essa prop para o meu componente padrão SearchBox
// criar a função search box que é o próprio componente, em arquivo separado, precisa exportar para que possa ser importado em outros locais.
//criei um componente e utilizei o mesmo 3 vezes. Importei uma unica vez.
// ?? - Condicional básica, se tiver usa se não faça ...Basicamente vai avaliar o operando da esquerda, e se ele for null ou undefined, ele retorna o da direita

// Trocando dados entre Componentes

// Posso passar props ao meu componente SerachBox, assim como passar função dentro do componente. Ação específica para qd o usuário digitar alguma coisa. Usar a prop dentro da função
//Esta enviado via onChangeTexto que é a prop enviada para fora, e recebo,armazeno em um useState no SearchBox.
//Envio de informações do componente e a tela que exibe o componente.

//Ao digitar joga na minha tela, coloca na minha useState e no outro placeholder. Comunicação de fora para dentro.
// No primeiro componente é de dentro para fora. 

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';    // agora que importei posso usar

function App() {

    const [searchText, setSearchText] = useState('');

    function handleSearchInput(novoTexto) {
        setSearchText(novoTexto);
    }

    return (
    <>
        <h1>Lista de tarefas </h1>

        <SearchBox 
        frasePadrao="Faça sua busca..."
        onChangeText={handleSearchInput}
        />

        <SearchBox 
        frasePadrao= {searchText}
        />

        <hr/>
        Texto procurado...{searchText}

        {/* {<SearchBox frasePadrao="Digite o seu nome"/> }        

        {<SearchBox/> } */}
    </>
    );
}

export default App;

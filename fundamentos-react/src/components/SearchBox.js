// criar a função search box que é o próprio componente, em arquivo separado, precisa exportar para que possa ser importado em outros locais.
//criei um componente e utilizei o mesmo 3 vezes. Importei uma unica vez.
// ?? - Condicional básica, se tiver usa se não faça ...Basicamente vai avaliar o operando da esquerda, e se ele for null ou undefined, ele retorna o da direita

import React, {useState} from 'react';
import styled from 'styled-components';

const InputText = styled.input `
    border: 2px solid #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width:300px;
`;



function SearchBox(props) {
    return (
        <InputText 
            type= 'text' 
            placeholder={props.frasePadrao ?? 'Digite alguma coisa'}/>
    );
}

export default SearchBox;
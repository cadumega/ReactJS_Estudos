// criar a função search box que é o próprio componente, em arquivo separado, precisa exportar para que possa ser importado em outros locais.
//criei um componente e utilizei o mesmo 3 vezes. Importei uma unica vez.
// ?? - Condicional básica, se tiver usa se não faça ...Basicamente vai avaliar o operando da esquerda, e se ele for null ou undefined, ele retorna o da direita

// Trocando dados entre Componentes
//Usa as proprias propriedades o campo.
//Vou monitorar texto entao add useEffect.
// onChangeText nome da fç e mando (texto) da props q estou modificando

//Verificação basica para proteger, se eu tiver a prop ai uso ela.

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const InputText = styled.input `
    border: 2px solid #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width:300px;
`;

function SearchBox(props) {

    const [texto,setTexto] = useState('');

    useEffect(()=> {
        if(props.onChangeText) {
            props.onChangeText(texto)
        }
    }, [texto]);

    // function inputTextChange(e) {
    //     setTexto(e.target.value);
    // }

    return (
        <InputText 
            type= 'text'
            value = {texto} 
            onChange={(e)=>setTexto(e.target.value)}
            // onChange={inputTextChange}
            placeholder={props.frasePadrao ?? 'Digite alguma coisa'}/>
    );
}

export default SearchBox;
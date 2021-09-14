import React from 'react';
import { useParams } from 'react-router-dom';  // hook para pegar as informações

function Categoria() {

    let { cat } = useParams();

    return (
        <div>
            <h4> Página Categoria </h4>
            Exibindo itens da categoria: {cat}
        </div>
    );
}


export default Categoria;
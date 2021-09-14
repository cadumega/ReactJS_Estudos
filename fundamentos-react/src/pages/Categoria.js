// Router: query

import React from 'react';
import { useLocation } from 'react-router-dom';  // hook para pegar as informações


function useQuery() {
    return new URLSearchParams( useLocation().serch);  //hook criado
}
function Categoria() {
    let query = useQuery();                    //hook

    let cat = query.get('tipo');
    let subtipo = query.get('subtipo');
    
    return (
        <div>
            <h4> Página Categoria </h4>
            Exibindo itens da categoria: {cat} - {subtipo}
        </div>
    );
}


export default Categoria;
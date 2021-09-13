// Router biblioteca a parte, 
//  npm install react-router-dom   *NO ARQ .js do SRC!!!* e depois npm start para voltar inicialização do sistema.     
//  versão do router para web, serve como a base do site
// Não precisar Atualizar a página toda, recarregar somente o link /sobre .
// Por isso importei lá em cima o Link, o site nem pisca para atualizar, é aplicado um js que linka com react e recarrega apenas o que interessa do componente.

import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {



    return (
        <BrowserRouter>
          <header>
            <h1>Meu Site Legal </h1>
               <nav>
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to ="/sobre">Sobre</Link>
                     </li>
                  </ul>
                </nav>
            </header>
        </BrowserRouter>
   );
}

export default App;



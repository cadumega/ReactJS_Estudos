// Pega name que esta em localstorage e irá setar na minha var name, pegando um valor da local storage
// Criar um monitor com useEffect , para monitorar o meu localStorage
// O onChange é um evento que representa a mudança do valor de um componente, onde atravez da mudança você executa sua função. O useEffect você informa ao React que seu componente precisa fazer algo após a renderização.

import React, {useState, useEffect} from "react";

function App() {

        const [name, setName] = useState (localStorage.getItem('name'));

        useEffect(()=> {
            localStorage.setItem('name',name);
        }, [name]);

    return (
        <>
            {/* Nome: {name} */}
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </>
   );
}

export default App;



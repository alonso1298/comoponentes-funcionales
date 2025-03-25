import { useState } from "react";

// Reglas de los Hooks: 
// 1. No se llaman en loops, ni condiciones, siempre en el nivel mas alto del componente
// 2. Solo se llaman es 2 partes:
// Componentes de react
// Custom hooks
const App = () => {
    const [contador, setContador] = useState(0);
    return (
        <div>
            Contador: {contador}
            <button onClick={() => setContador(contador + 1)} >Incrementar</button>
        </div>
    )
}

export default App;
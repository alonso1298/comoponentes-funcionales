import { useState } from "react";

// Reglas de los Hooks: 
// 1. No se llaman en loops, ni condiciones, siempre en el nivel mas alto del componente
// 2. Solo se llaman es 2 partes:
// Componentes de react
// Custom hooks
// Cuando creemos un custom hook siempre tiene que comenzar con use*
// class App extends Component {
//     state = {contador: 0}
//     incrementar = () => {
//         this.setState({ contador: this.state.contador + 1})
//     }
//     render () {
//         return (
//             <div>
//                 Contador: {this.state.contador}
//                 <button onClick={this.incrementar} >Incrementar</button>
//             </div>
//         )
//     }
// }
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        setContador(contador + 1)
    }

    return [contador, incrementar]
}
const App = () => {
    const [contador, incrementar] = useContador(0);
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar} >Incrementar</button>
        </div>
    )
}

export default useState;
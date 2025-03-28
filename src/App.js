import { useRef } from "react";

const App = () => {
    const ref = useRef();
    const inputRef = useRef();
    const click = () => {
        console.log(ref.current);  // Tenemos acceso a propiedades del DOM
        ref.current.innerHTML = 'Hello  World';
    }
    const focus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focus}>Focus</button>
            <div onClick={click} ref={ref}>Hola mundo</div>
        </div>
    )
}

export default App;
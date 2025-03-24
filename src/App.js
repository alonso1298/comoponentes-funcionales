// Funcioón Impura cambia constantemente 
const impura = () => new Date().toLocaleString();

console.log(impura());

// Función pura es una funcion que nunca cambia el valor de retorno
const MiComponente = ({miProp}) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  );
}
const App = () => {
  return (
    <MiComponente miProp={'Perrito feliz'} />
  );
}

export default App;

import BotonCaja from "./components/BotonCaja";
import Contenedor from "./components/Contenedor";
import Pantalla from "./components/Pantalla";
import Boton from "./components/Boton";
import CalculadoraProvider from "./components/context/CalculadoraContext";

const botonValores = [
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
];


function App() {
  return (
    <CalculadoraProvider>
    <Contenedor>
      <Pantalla/>
      <BotonCaja>
      {botonValores.flat().map((btn,index)=>(
         <Boton
          valor={btn}
          key={index}
         />
      ))}
    </BotonCaja>
   </Contenedor>
   </CalculadoraProvider>
  );
}

export default App;

import { createContext, useState } from "react";

export const CalculadoraContext = createContext();

const CalculadoraProvider = ({children}) => {

  const[calculadora,setCalculadora]= useState({
     sign:"",
     num:0,
     res:0
  });

  const providerValores = {
    calculadora,setCalculadora
  }

  return (
    <CalculadoraContext.Provider value={providerValores}>
           {children}
    </CalculadoraContext.Provider>
  )
}

export default CalculadoraProvider;
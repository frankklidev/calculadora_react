import React, { useContext } from 'react'
import { CalculadoraContext } from './context/CalculadoraContext';
import { Textfit } from 'react-textfit';

const Pantalla = () => {
  const {calculadora} = useContext(CalculadoraContext);
  return (
    <Textfit className="pantalla" max={70} mode="single">{calculadora.num? calculadora.num: calculadora.res}</Textfit>
  )
}

export default Pantalla
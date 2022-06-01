import React, { useContext } from 'react';
import { CalculadoraContext } from './context/CalculadoraContext';

const obtenerNombreStilo = boton=>{

  

  const nombreClase={
    '=':'igual',
    'x':'operaciones',
    '-':'operaciones',
    '+':'operaciones',
    '/':'operaciones',
  }
  return nombreClase[boton]
}

const Boton = ({valor}) => {

  const {calculadora,setCalculadora}= useContext(CalculadoraContext);
 
  //Funcion Coma

  const comaClick = () => {
    setCalculadora({
      ...calculadora,
     num:!calculadora.num.toString().includes('.') ? calculadora.num + valor : calculadora.num
     
    });
  }
  const resetearClick=()=>{
    setCalculadora({sign:'',num:0,res:0})
  }
  const handleClickBoton = ()=>{
    const numeroString = valor.toString()

    let numeroValor;
    if (numeroString==='0' && calculadora.num==='0') {
      numeroValor='0'
    }else{
      numeroValor=Number(calculadora.num + numeroString)
    }

    setCalculadora({
      ...calculadora,
      num:numeroValor
    })
  }

  const signClick=()=>{
    setCalculadora({
      sign:valor,
      res:!calculadora.res && calculadora.num ? calculadora.num :calculadora.res,
      num: 0
    })
  }

  const igualClick = ()=>{
     if (calculadora.res && calculadora.num) {
      const math = (a,b,sign)=>{
        const resultado = {
          '+':(a,b)=>a+b,
          '-':(a,b)=>a-b,
          'x':(a,b)=>a*b,
          '/':(a,b)=>a/b,
        }
        return resultado[sign](a,b);
     }
     setCalculadora({
      res:math(calculadora.res,calculadora.num,calculadora.sign),
      sign:'',
      num:0
    })
    }
    
  }

  const porcentClick = ()=>{
    setCalculadora({
      num:(calculadora.num/100),
      res:(calculadora.num/100),
      sign:''
    })
  }

  const invertirClick =()=>{

    setCalculadora({
      num:calculadora.num ? calculadora.num*-1:0,
      res:calculadora.res ? calculadora.num*-1:0,
      sign:''
    })
  }

  const handlebtnClick=()=>{

    const resultado = {
      '.':comaClick,
      'C':resetearClick,
      '/':signClick,
      'x':signClick,
      '-':signClick,
      '+':signClick,
      '=':igualClick,
      '%':porcentClick,
      '+-':invertirClick
      
    }
    if(resultado[valor]){
       return resultado[valor]()
    }else{
       return handleClickBoton()
    }
  }
  return (
    <button onClick={handlebtnClick} className={`${obtenerNombreStilo(valor)} boton `}>{valor}</button>
  )
}

export default Boton;
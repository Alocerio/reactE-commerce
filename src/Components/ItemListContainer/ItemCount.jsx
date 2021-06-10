import React, { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';



const FnContador = ({stock, initial}) => {

    const [contador, setContador] = useState(Number(initial));

    const sumar = () =>{
        if(contador < stock){
            setContador(contador + 1);
        } 
    }
    const restar = ()=>{
        if (contador > 1){
            setContador(contador - 1);
        }
    }

    return (
        <div className='container card'>
            <h3 >Producto Random</h3>

            <button 
              onClick={sumar}>+</button>
               <button 
              onClick={restar}>-</button>

           <p className='text-center'> Cantidad = {contador}</p> 
            <br />
            
        </div>
    );

};

export default FnContador;
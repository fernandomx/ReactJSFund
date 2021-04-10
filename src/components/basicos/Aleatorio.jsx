import React from 'react'


export default (props) =>  {

    //const min = Math.ceil(props.min);
    //const max = Math.floor(props.max);
    
    //use destruct
    const { min, max } = props

    const aleatorio = Math.floor(Math.random() * (max - min)) + min;

    return (

        <div>
            <strong><h2> Aleatorio</h2></strong>
            <p>
                <strong>Valor minimo:</strong> {props.min}
            </p>
            <p>
                <strong>Valor maximo:</strong> {props.max}
            </p>

            <p>
                <strong>Valor Aleatorio:</strong> {aleatorio}
            </p>


        </div>
    )

}
import React from 'react'


//Components
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

//Arrow function
export default () =>  (

    
    <div id="app" >
        <h1>Fundamentos React</h1>
       
       
       <Card titulo='#04 - Desafio Aleatorio'>
            <Aleatorio min={1} max={10} />
       </Card>
       
       <Card titulo='#03 - Fragmento'>
            <Fragmento />    
       </Card>

       <Card titulo='#02 - Com Parametro'>
            <ComParametro 
                    titulo='Situation of the student'  
                    aluno='Pedro'
                    nota={6.3} />    
        </Card>

       <Card titulo='#01 - Primeito Componente'>
            <Primeiro></Primeiro>
       </Card>
       
        
    </div>
    
);

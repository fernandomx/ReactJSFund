import React from 'react'


import './App.css'

//Components

import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

//Arrow function
export default () =>  (

    
    <div className='App' >
        <h1>Fundamentos React</h1>
       
       <div className='Cards'>

          
          
          
          <Card titulo='#08 - Renderizacao Condicional' color='#982395'>
               <ParOuImpar numero={22}></ParOuImpar>
               <UsuarioInfo usuario={{ nome: 'Fernando'}} />
               <UsuarioInfo usuario={{ email: 'teste@teste.com'}} />
          </Card>


          <Card titulo='#07 - Desafio Repeticao' color='#3A9AD9'>
               <TabelaProdutos></TabelaProdutos>
          </Card>

          <Card titulo='#06 - Repeticao' color='#00C8F8'>
               <ListaAlunos></ListaAlunos>
          </Card>


          <Card titulo='#05 - Componentes com filhos' color='#00C8F8'>
               <Familia sobrenome='Xavier'>
 
                    <FamiliaMembro nome='Fernando' />
                    <FamiliaMembro nome='Graziele' />
                    <FamiliaMembro nome='Eduarda'/>
                    <FamiliaMembro nome='Lucas' />
                  
                    
               </Familia>
          </Card>


          <Card titulo='#04 - Desafio Aleatorio' color='#FA6900'>
               <Aleatorio min={1} max={10} />
          </Card>
          
          <Card titulo='#03 - Fragmento' color='#E94C6F'>
               <Fragmento />    
          </Card>

          <Card titulo='#02 - Com Parametro' color='#E8B71A'>
               <ComParametro 
                         titulo='Situation of the student'  
                         aluno='Pedro'
                         nota={6.3} />    
          </Card>

          <Card titulo='#01 - Primeito Componente' color='#588C73'>
               <Primeiro></Primeiro>
          </Card>
       </div>

       
        
    </div>
    
);

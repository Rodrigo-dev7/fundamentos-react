import React from 'react';

import Primeiro from './components/basic/Primeiro';
import Parametro from './components/basic/Parametro';
import Filhos from './components/basic/Filhos';
import Card from './components/layout/Card';
import Repetition from './components/basic/Repetition';
import Condicional from './components/basic/Condicional';
import Pai from '../src/components/Comunication/direta/Pai';
import Super from '../src/components/Comunication/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/Mega/Mega';

import './index.css'
import './App.css'


export default (props) => {
  return (
    <div className="App" >
      <h1>Fundamentos React</h1>

      <div className="Cards">

        <Card title=" #10 - MegaSena" color="#29ee6a"  >
          <Mega qtdeNumero={8} ></Mega>
        </Card>

        <Card title=" #09 - Contador" color="#293e6a"  >
          <Contador passo={10} valor={100}></Contador>
        </Card>

        <Card title=" #08 - Input" color="#04d122"  >
          <Input></Input>
        </Card>


        <Card title=" #07 - Comunicação Indireta" color="#098daa"  >
          <Super></Super>
        </Card>

        <Card title=" #06 - Comunicação Direta" color="#ff0043"  >
          <Pai sobrenome="Freitas"  ></Pai>
        </Card>

        <Card title=" #05 - Componente com Condicional" color="#ff7743"  >
          <Condicional number={11} ></Condicional>
        </Card>

        <Card title=" #04 - Componente com Repetição " color="#e94c6f" >
          <Repetition></Repetition>
        </Card>


        <Card title=" #03 - Componente com Parametro " color="#008bba">
          <Parametro title="Esse é Titulo" subtitle="Esse é o SubTitulo" >
          </Parametro>
        </Card>

        <Card title=" #02 - Componente com  Filhos " color="#D96459">
          <Filhos>
            <ul>
              <li>Beth</li>
              <li>Ana</li>
              <li>Carlos</li>
              <li>Dani</li>
            </ul>
          </Filhos>
        </Card>

        <Card title=" #01 -Primeiro Componente " color="#92B06A">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  )
}
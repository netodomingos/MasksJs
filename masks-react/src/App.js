import React, { useState } from 'react';

import { cpfMask } from './Components/cpfMask'
import { phoneMask } from './Components/phoneMask'
import { cnpjMask } from './Components/cnpjMask'

import './App.css';

export default function App(){

  const [ cpf, setCpf ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ cnpj, setCnpj ] = useState('')
  
    return (
      <div className='input-div'>
        <div className='intern-div'>
          <h1>React Masks</h1>
          <h3>CPF:</h3>
          <input type='text' maxLength='14' name='cpf' value={cpf} onChange={e => setCpf(cpfMask(e.target.value))}/>
          <h3>Telefone:</h3>
          <input type='text' maxLength='15' name='telefone' value={phoneNumber} onChange={e => setPhoneNumber(phoneMask(e.target.value))}/>
          <h3>CNPJ</h3>
          <input type='text' maxLength='18' name='telefone' value={cnpj} onChange={e => setCnpj(cnpjMask(e.target.value))}/>
        </div>
      </div>
    );
  }

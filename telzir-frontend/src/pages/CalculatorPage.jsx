/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import './CalculatorPage.css';

import CallsTable from '../components/CallsTable';
import Modal from '../components/Modal';
import LabelInput from '../components/LabelInput';
import Select from '../components/Select';
import ResultsTable from '../components/ResultsTable';
import postData from '../service/postData';

import phoneBook from '../service/PhoneBook';
import contracts from '../service/Contract';

export default function CalculatorPage() {
  const [min, setMin] = useState(0);
  const [oriDest, setOriDest] = useState('011 para 016');
  const [contract, setContract] = useState('FaleMais30');

  const [calls, setCalls] = useState([]);
  const [result, setResult] = useState({});

  return (
    <div>
      <div className="tablesContainer">
        <CallsTable data={calls} />
        <ResultsTable data={result} />
      </div>
      <div>
        <form className="form">
          <div className="card">
            <Modal />
            <div className="card-body">
              <h5 className="card-title">Info da ligacao</h5>
              <LabelInput entity="Tempo" handleChange={setMin} />
              <Select tag="origem destino" data={phoneBook} handleChange={setOriDest} id="oriDes" />
              <Select tag="plano" data={contracts} handleChange={setContract} id="contracts" />
            </div>
            <section className="btns">
              <button
                type="button"
                data-testid="add"
                className="btn btn-primary"
                onClick={() => setCalls([...calls, {
                  min, oriDest, contract,
                }])}
              >
                Adicionar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => postData(calls, setResult)}
              >
                Calcular
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  setCalls([]);
                  setResult({});
                  setOriDest('011 para 016');
                  document.querySelector('#oriDes').value = '011 para 016';
                  document.querySelector('#contracts').value = 'FaleMais30';
                }}
              >
                Reset
              </button>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
}

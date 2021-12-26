/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import './CalculatorPage.css';

import CallsTable from '../components/CallsTable';
import Modal from '../components/Modal';
import LabelInput from '../components/LabelInput';
import Select from '../components/Select';
import ResultsTable from '../components/ResultsTable';

import areaCodes from '../service/AreaCodes';
import contract from '../service/Planos';

export default function CalculatorPage() {
  const [min, setMin] = useState(0);
  const [origin, setOrigin] = useState('');
  const [destiny, setDestiny] = useState('');
  const [plan, setPlan] = useState('');

  const [calls, setCalls] = useState([]);
  // const [result, setResult] = useState([]);

  return (
    <div>
      <div className="tablesContainer">
        <CallsTable data={calls} />
        <ResultsTable />
      </div>
      <div>
        <form className="form">
          <div className="card">
            <Modal />
            <div className="card-body">
              <h5 className="card-title">Info da ligacao</h5>
              <LabelInput entity="Tempo" text="Tempo" handleChange={setMin} />
              <Select tag="origem" data={areaCodes} handleChange={setOrigin} />
              <Select tag="destino" data={areaCodes} handleChange={setDestiny} />
              <Select tag="plano" data={contract} handleChange={setPlan} />
            </div>
            <section className="btns">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setCalls([...calls, {
                  min, origin, destiny, plan,
                }])}
              >
                Adicionar
              </button>
              <button type="button" className="btn btn-primary">Calcular</button>
              <button
                type="button"
                className="btn btn-warning"
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

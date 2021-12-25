/* eslint-disable react/function-component-definition */
import React from 'react';
import CalculationTable from '../components/CalculationTable';
import Modal from '../components/Modal';
import LabelInput from '../components/LabelInput';
import Select from '../components/Select';

export default function CalculatorPage() {
  return (
    <div>
      <div>
        <CalculationTable />
      </div>
      <div>
        <form className="form">
          <div className="card">
            <Modal />
            <div className="card-body">
              <h5 className="card-title">Info da ligacao</h5>
              <LabelInput entity="Tempo" text="Tempo" />
              <Select />
              <Select />
              <Select />
            </div>
            <section className="btns">
              <button
                type="button"
                className="btn btn-primary"
              >
                Adicionar
              </button>
              <button type="button" className="btn btn-primary">Calcular</button>
            </section>
            <button
              type="button"
              className="btn btn-warning toggle"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

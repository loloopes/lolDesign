/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

export default function CallsTable({ data }) {
  return (
    <div className="tablesContainer">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Origem</th>
            <th scope="col">Destino</th>
            <th scope="col">Tempo</th>
            <th scope="col">Plano FaleMais</th>
          </tr>
        </thead>
        <tbody>
          { data.length ? data.map((call, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{call.origin}</td>
              <td>{call.destiny}</td>
              <td>{call.min}</td>
              <td>{call.plan}</td>
            </tr>
          )) : null}
        </tbody>
      </table>
    </div>
  );
}

CallsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

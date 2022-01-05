/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import React from 'react';

export default function ResultsTable({ data: { withContract, withoutContract } }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Com FaleMais</th>
            <th scope="col">Sem FaleMais</th>
          </tr>
        </thead>
        <tbody>
          { withContract && withContract.map((callRes, index) => (
            <tr>
              <td role="cell">{index + 1}</td>
              <td role="cell">{`R$ ${callRes.toFixed(2)}`}</td>
              <td role="cell">{`R$ ${withoutContract[index].toFixed(2)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ResultsTable.propTypes = {
  data: PropTypes.object,
}.isRequired;

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
              <td>{index + 1}</td>
              <td>{callRes}</td>
              <td>{withoutContract[index]}</td>
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

/* eslint-disable react/function-component-definition */
import React from 'react';

export default function CalculationTable() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Origem</th>
            <th scope="col">Destino</th>
            <th scope="col">Tempo</th>
            <th scope="col">Plano FaleMais</th>
            <th scope="col">Com FaleMais</th>
            <th scope="col">Sem FaleMais</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

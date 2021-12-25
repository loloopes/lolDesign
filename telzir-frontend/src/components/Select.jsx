/* eslint-disable react/function-component-definition */
import React from 'react';

export default function Select() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" htmlFor="inputGroupSelect01">Origem</span>
      </div>
      <select className="custom-select" id="inputGroupSelect01">
        <option selected>Escolha</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}

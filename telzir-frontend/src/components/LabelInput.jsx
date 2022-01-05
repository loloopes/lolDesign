/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import question from '../images/question-circle.svg';

export default function LabelInput({ entity, handleChange }) {
  return (
    <div className="input-group mb-2">
      <input data-testid={entity} id={entity} name={entity} placeholder={entity} type="number" className="form-control" onChange={({ target: { value } }) => handleChange(value)} />
      <button type="button" data-toggle="modal" data-target="#modal" className="input-group-text" title={entity}><img src={question} alt="questionMarkBtn" /></button>
    </div>
  );
}

LabelInput.propTypes = {
  entity: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

export default function Select({
  tag, data, handleChange, id,
}) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{tag}</span>
      </div>
      <select className="custom-select" id={id} onChange={({ target: { value } }) => handleChange(value)}>
        { data
          ? data.map((code) => <option value={code}>{code}</option>) : <option>Loading...</option> }
      </select>
    </div>
  );
}

Select.propTypes = {
  data: PropTypes.string,
}.isRequired;

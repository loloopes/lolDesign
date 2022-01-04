/* eslint-disable react/function-component-definition */
import React from 'react';

export default function Modal() {
  return (
    <div className="modal fade" id="modal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Detalhes</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ol>
              <li>
                Campo Tempo deve ser um numero (mesmo que 0), sem simbolos.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

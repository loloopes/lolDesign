import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CalculatorPage from '../pages/CalculatorPage';

describe('1- Test whether all components have been rendered at CalculatorPage', () => {
  beforeEach(() => {
    render(<CalculatorPage />);
  });

  it('should render the select input on screen to set call Origin/Destiny', () => {
    const selectInput = screen.getByTestId('oriDes');
    expect(selectInput).toBeDefined();
  });

  it('should render the select input on screen to set contract', () => {
    const selectInput = screen.getByTestId('contracts');
    expect(selectInput).toBeDefined();
  });

  it('should render the input field on the screen to set call minutes', () => {
    const inputField = screen.getByTestId('Tempo');
    expect(inputField).toBeDefined();
  });

  it('should render 4 buttons "Adicionar, Calcular, Rest, ? (open modal)"', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
  });

  it('should render 2 tables, origin/destiny calls and results', () => {
    const tables = screen.getAllByRole('table');
    expect(tables).toHaveLength(2);
  });
});

describe('2- Test whether form updates table origin/destiny calls upon filling and submitting', () => {
  beforeEach(() => {
    render(<CalculatorPage />);
  });

  it('should populate origin destiny table after clicking on "Adicionar"', () => {
    const timeInput = screen.getByTestId('Tempo');
    const originDestinySelect = screen.getByTestId('oriDes');
    const contractSelect = screen.getByTestId('contracts');
    const addButton = screen.getByTestId('add');

    fireEvent.change(timeInput, { target: { value: 50 }});
    userEvent.selectOptions(originDestinySelect, '011 para 017');
    userEvent.selectOptions(contractSelect, 'FaleMais60');
    userEvent.click(addButton);

    const tableData = screen.getAllByRole('cell');
    expect(tableData[0].innerHTML).toBe('1');
    expect(tableData[1].innerHTML).toBe('011 para 017');
    expect(tableData[2].innerHTML).toBe('50');
    expect(tableData[3].innerHTML).toBe('FaleMais60');
  });
});

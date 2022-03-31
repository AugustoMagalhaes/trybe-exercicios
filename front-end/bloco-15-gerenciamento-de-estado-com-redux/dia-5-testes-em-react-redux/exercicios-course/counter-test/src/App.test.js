import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import renderWithRedux from './renderWithRedux'

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('Testando contador iniciado com valor = 10', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const counterBtn = screen.getByRole('button', {name: /clique/i});
    expect(screen.getByText('5')).toBeInTheDocument();
    userEvent.click(counterBtn);
    expect(screen.getByText('6')).toBeInTheDocument();
  })

  test('Testando contador iniciado com valor inicial = 10', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const counterBtn = screen.getByRole('button', {name: /clique/i});
    expect(screen.getByText('10')).toBeInTheDocument();
    userEvent.click(counterBtn);
    userEvent.click(counterBtn);
    expect(screen.getByText('12')).toBeInTheDocument();
  })
});
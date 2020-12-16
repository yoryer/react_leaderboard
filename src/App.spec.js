import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
});

test('Age is sorted correctly', () => {
  const { getByText, getByTestId } = render(<App />);

  const age = getByText('Age', { selector: 'button' });

  fireEvent.click(age);

  const table = getByTestId('leaderboard-table');
  expect(table).toMatchSnapshot();
});

test('Name is sorted correctly', () => {
  const { getByText, getByTestId } = render(<App />);

  const name = getByText('Name', { selector: 'button' });
  fireEvent.click(name);

  const table = getByTestId('leaderboard-table');
  expect(table).toMatchSnapshot();
});

test('Points is sorted correctly', () => {
  const { getByText, getByTestId } = render(<App />);

  const points = getByText('Points', { selector: 'button' });

  fireEvent.click(points);

  const table = getByTestId('leaderboard-table');
  expect(table).toMatchSnapshot();
});

test('Rank is sorted correctly', () => {
  const { getByText, getByTestId } = render(<App />);

  const age = getByText('Rank', { selector: 'button' });
  fireEvent.click(age);

  const table = getByTestId('leaderboard-table');
  expect(table).toMatchSnapshot();
});

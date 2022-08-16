import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test("the counter starts at 0", () => {
  render(<App />)
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
})

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
}) // +버튼이 있는지부터 확인하는 과정

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(buttonElement).toHaveTextContent("1");

})


test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
}) 

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(buttonElement).toHaveTextContent("0");

})

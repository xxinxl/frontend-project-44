#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'What is the result of the expression?';

const task = () => {
  const operand1 = Math.round(Math.random() * 10);
  const operand2 = Math.round(Math.random() * 10);

  const operator = ['+', '*', '-'];
  const indexOPer = Math.floor(Math.random() * 2);

  let answer = '';

  switch (indexOPer) {
    case 0:
      answer = `${operand1 + operand2}`;
      break;
    case 1:
      answer = `${operand1 * operand2}`;
      break;
    default:
      answer = `${operand1 - operand2}`;
      break;
  }

  return [`${operand1} ${operator[indexOPer]} ${operand2}`, answer];
};

gameBody(description, task);

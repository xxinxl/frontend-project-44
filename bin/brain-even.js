#!/usr/bin/env node
import greeting from '../src/cli.js';

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".'); 

const task = () => {
    const q = (Math.round() *100);
    // const a = q % 2;
    let a = '';
    if (q % 2 === 0) {
        a = 'yes';
    } else {
        a = 'no';
    }

    return [q, a];
};

console.log(task());
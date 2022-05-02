/* eslint-disable no-console */

// Incorporando los estilos a mi bundle
import './styles/styles.css';
import './styles/mystyles.css';

console.log('👽👽Webpack Front-end Working!!!👾👾');

// default parameters
const show = (m = '👾🐉') => {
  console.log(m);
};
show();

// Promises
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line indent
      resolve('function resolve');
    }, 10000);
  });
}

async function asyncCall() {
  console.log('Calling asyn function!!!');
  const result = await resolveAfter2Seconds();
  console.log(result); // Imprime "function resolve" en la consola
}

asyncCall();

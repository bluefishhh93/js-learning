console.log('30 Days of JavaScript');
console.log('%d %s of JavaScript', 30, 'Days');

console.log('%c30 Days Of JavaScript', 'color:green'); // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
); // log output green red and yellow text

console.warn('This is a warning');
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
);
console.warn('Warning is different from error');

console.error('This is an error message');
const fatorial = (n) => {
  if (Number.isInteger(n)) {
    let index = n;
    for (index; n > 1; n -= 1) {
      index *= (n - 1);      
    }
    return index;
  }  
}

console.log(fatorial(3));

const recursiveFatorial = (n) => {
  if (Number.isInteger(n) && n >= 0) {
    console.log('n eh: ', n)
    return (n === 0) ? 1 : (n * recursiveFatorial(n - 1));
  }
  // https://backefront.com.br/como-fazer-fatorial-recursivo-javascript/
}

console.log(recursiveFatorial(4));
function miniMaxSum(arr) {

  let soma = 0;

  for(let i = 0; i < arr.length; i++) {
    soma = arr.reduce((acc, curr) => acc+curr, 0);
  }

  console.log(`${soma-Math.max(...arr)} ${soma-Math.min(...arr)}`);
}

miniMaxSum([1,2,3,4,5]);
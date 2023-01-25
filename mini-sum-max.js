function miniMaxSum(arr) {

  let maior = 0;
  let menor = 0;
  let soma = 0;

  for(let i = 0; i < arr.length; i++) {
    soma = arr.reduce((acc, curr, index) => {
      if(i !== index){
        return acc += curr;
      } 
      return acc;
    }, 0);
    
    if(i === 0) {
      menor = soma;
      maior = soma;
    }
    if(soma > maior) {
      maior = soma;
    } else if(soma < menor) {
      menor = soma;
    }
  }
  console.log(`${menor} ${maior}`);
}

miniMaxSum([5,5,5,5,5]);
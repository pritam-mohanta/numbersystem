// Prime Number

const numbers = [
  19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];

function isprime(num){
  if (num <= 1) return false;
  for (let i=0; i<= Math.sqrt(num); i++){
    if (num % i == 0){
      return false;
    }
  }
  return true;
}

let prime=[];
for (let i=0;i<numbers.length;i++){
  if (isprime(numbers[i])){
    prime.push(numbers[i])
  }
}

console.log('Prime Numbers',prime)


function calculate(arr){
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((acc,val) => acc+val , 0);

  return {max,min,sum}
}

const {max,min,sum} = calculate(numbers);

console.log('Max',max);
console.log('Min',min);
console.log('sum',sum);
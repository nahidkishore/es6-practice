const doubleIt=num => num*2;
const result=doubleIt(50);
console.log(result);

// multiple parameter

const add=(x,y)=> x+y;
const result1=add(5,10);
console.log(result1);

//multi Line Arrow function

const doMath=(x,y)=>{
  const sum=x+y;
  const diff=x-y;
  const result=sum*diff;
  return result;
}

const result2=doMath(7,5);
console.log(result2);

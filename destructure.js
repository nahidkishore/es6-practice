const person={name:'nahid', age:'25', dream:'Full stack developer', hobby:'Facebooking', gfName:'naima', phone:'01776518888091', address:'Dhaka'};

//const gfName=person.gfName;
//const phone=person.phone;
const {phone,gfName,dream,address}=person; // multiple object show korate chaile eivabe use korbo....

console.log(gfName,phone, dream);
console.log(gfName,phone,address);
console.log(gfName,phone);

//destructure complex object

const complexObject={
  name:'abc',
  info:{
    address:'Rampura',
    leader:'Tiger vai'

  }
}
const {leader}=complexObject.info;
console.log(leader);
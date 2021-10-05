'use strict';

const fn = () => {
    const obj1 = { name: 'Dima' };//1
    let obj2 = { name: 'Sergey' };//2
  
    obj1.name = 'Ivan'; //3
    obj2.name = 'Valera'; //3
  
    obj2 = { name: 'Ivan Valera' };
  
  };
  
  fn();

const createUser =(name, city)=>{
const obj = {};
obj.name = name;
obj.city = city;
return obj;
}

  console.log(createUser('Marcus Aurelius', 'Roma'));
'use strict';

const range = (begin, end) => {
    const len = end - begin;
    if (len < 0) return [];
    const array = new Array(len);
    let i = 0;
    for (let n = begin; n <= end; n++) {
      array[i++] = n;
    }
    return array;
  };

console.log(range(15, 30));

const rangeOdd = (begin, end) => {
    const len = end - begin;
    if (len < 0) return [];
    const array = new Array(len);
    let i = 0;
    for (let n = begin; n <= end; n++) {
        if (n % 2 !== 0) array[i++] = n;
    }
    return array;
  };

  console.log(rangeOdd(15, 30));

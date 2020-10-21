function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num){
        if(num >= 5){
            return true;
        }
    });
return result;
};
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
console.log("--------");

function evensOnly(arr){
      const result = arr.filter(function(num){
    if (num % 2 == 0){
        return true;
    }
      });
      return result;
}

console.log("Output from #2: " + evensOnly([3, 6, 8, 2]));

function doubleNumber(arr){
    const result = arr.map(function(num){
        return num * 2;
    });
    return result;
};
console.log(doubleNumbers([2, 5, 100]));

function total(arr) {
   const result = arr.reduce(function(num, finalAddition){
              finalAddition = finalAddition + num;
              return finalAddition;
   });
   return result;
}
console.log(total([1,2,3]));

//section D

//.sort()
function leastToGreatest(arr){
    const result = arr.sort(function(num1, num2){


    });
    return result;
}

//ES 6 assignment

const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
    return arr.map(carrot => {
        return {type: "carrot", name: carrot}
    });

}

console.log(mapMyVegetables([carrots]));
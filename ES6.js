/*task 1 -->*/
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
/*task 1 --<*/

/*task 2 -->*/
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
/*task 2 --<*/

/*task 3 -->*/
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
/*task 3 --<*/

/*task 4 -->*/
const magic = () => {
  return new Date();
};
/*task 4 --<*/

/*task 5 -->*/
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
/*task 5 --<*/

/*task 6 -->*/
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
/*task 6 --<*/

/*task 7 -->*/
const sum = (...args) => {
  //const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};
/*task 7 --<*/

/*task 8 -->*/
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);
/*task 8 --<*/

/*task 9 -->*/
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
/*task 9 --<*/

/*task 10 -->*/
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today: highToday } = HIGH_TEMPERATURES;
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
/*task 10 --<*/

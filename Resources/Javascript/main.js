// function testFunc() {
//     return 5;
// };

// export {testFunc};

//  const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

class Test {

  greet() {
    return 'Hello Again!'
  }

  printGreet() {
    console.log(this.greet())
  }

}

const test = new Test;
test.printGreet();

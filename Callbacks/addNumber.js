
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  // function teaAndBiscuits () {
  //   reader.question('Would you like some tea?', function (res) {
  //     console.log(`You replied ${res}.`);
  //     reader.question('Would you like some biscuits?', function (res2) {
  //       console.log(`You replied ${res2}.`);
  //
  //       const first = (res === 'yes') ? 'do' : 'don\'t';
  //       const second = (res2 === 'yes') ? 'do' : 'don\'t';
  //
  //       console.log(`So you ${first} want tea and you ${second} want biscuits.`);
  //       reader.close();
  //     });
  //   });
  // }


//   function askEverybody(howMany) {
//   reader.question("What's your name?\n", function(yourName) {
//     howMany--;
//     console.log(`Hello ${yourName}`);
//     if (howMany > 0) {
//       askEverybody(howMany);
//     } else {
//       reader.close();
//     }
//   });
// }

function addNumbers(sum = 0, numsLeft, completionCallBack) {
  reader.question('Please give me a number\n', function(res) {
    numsLeft--;
    sum += Number(res);
    console.log(sum);
    if (numsLeft > 0) {
      addNumbers(sum,numsLeft, completionCallBack);
    } else {
      completionCallBack(sum);
    }
  });
}

addNumbers(0, 2, sum => console.log(`Total Sum: ${sum}`));

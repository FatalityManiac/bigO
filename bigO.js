O(n)
O(n)
O(1)
O(n ^ 3)
O(n)
O(n)
O(n log n)
O(2 ^ n)
O(1)
O(n ^ 2)


//Time Complexity: O(n)
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }

//Time Complexity: O(n)
function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }

//Time Complexity: O(1)
function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }
  
//Time Complexity: O(n)
function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

//Time Complexity: O(n^2)
function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }

//Time Complexity: O(n)
function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }


  n^2 + n is O(n^2). True
  n^2 * n is O(n^3). True
  n^2 + n is O(n). False
  What’s the time complexity of the .indexOf array method? O(n)
  What’s the time complexity of the .includes array method? O(n)
  What’s the time complexity of the .forEach array method? O(n)
  What’s the time complexity of the .sort array method? O(n log n)
  What’s the time complexity of the .unshift array method? O(n)
  What’s the time complexity of the .push array method? O(1)
  What’s the time complexity of the .splice array method? O(n)
  What’s the time complexity of the .pop array method? O(1)
  What’s the time complexity of the Object.keys() function? O(n)
  What’s the space complexity of the Object.keys() function? O(n)
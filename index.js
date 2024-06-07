// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy' // YES
// Example - Hello // NO

function checkString(str) {
    const hasY = str.split('').some(char => char.toLowercase() === 'y');
    console.log(hasY? 'YES' : 'NO');
}

checkString('Crazyy');
checkString('Hello');

// 2. Write a function that finds a factorial of a number.  5! ==> 5 * 4 * 3 * 2 * 1
// Example - 5! = 120 (Use a normal loop for this one.) // ForEach

// function getFactorial(num) {
// logic
// return the value;
// }

function getFactorial(num) {
    let result = 1;
    const numbers = Array.from({length: num}, (_, i) => i + 1);
    
    numbers.forEach(n => {
        result *= n;
    });
}

console.log(getfactorial(5));

//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },  290
//   { name: "Daniel", marks: [40, 80, 100, 100] }, //
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70], 240
//   },
// ];
// function getHighestAverageStudent() { // return string
    // returns the student name with highest average marks
// }

function getHighestAverageStudent() {
    //Using map to calculate the average marks
    let studentAverage = studentList.map(student => {
        let totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
        let averageMarks = totalMarks / student.marks.length;
        return { name: student.name, averageMarks: averageMarks};
    });

    let highestAverageStudent = studentAverage.sort((a,b) => b.averageMarks - a.averageMarks)[0];
    return highestAverageStudent.name;
}

console.log(getHighestAverageStudent());


//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function findUniqueNumber(arr) {
    //Creating an object that will count the occurrence of each number
    const countOccurrences = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    });
    
    //Using filter to find which number occured only once
    const uniqueNumbers = arr.filter(num => countOccurrences[num] === 1);
    return uniqueNumbers[0];

}
//Example
const numbers = [20, 20, 11, 4, 11, 20, 2, 4];
console.log(findUniqueNumber(numbers));


// aba abba  abca  acca a 
//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

function isPalindrome(str) {
    //Checking if the strings are equal to their reverse
    return str === str.spilt('').reverse().join('');
}

function filterPalindrome(arr) {
    //Using filter to give only that words which are palindrome
    return arr.fliter(isPalindrome);
}

//Example
const words = ['abc', 'aba', 'ccc', 'dca', 'a'];
const palindromes = filterPalindrome(words);
console.log(palindromes);
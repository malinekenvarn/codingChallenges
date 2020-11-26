/*Challenge # 4 
The task is to create a function that will determine if a word is a palindrome.
Input: one string. Output: boolean value.
My solution: I used a forloop that iterated through half of the string, first comparing the character in index 0 with the one in the last index,
and then continuing towards the middle of the string.

What this challenge have taught me: Comparing to the solution on the educative.io blog, I see that another solution is to first do str.replace(/[^\w]/g, "") and then 
use the methods split('').reverse().join('') then compare strings. So I will do some research to find the most effective method for this task.
I think personally that my solution is not the most effective one because of the forloop and the if-statement inside. So I want to minimize the amount of code.
*/

function palindrome(str){

    let comparator = true;

    for(let i=0; i<str.length/2; i++){
        if(str[i]!=str[str.length-1-i]){
            comparator = false;
        }
    }

 return comparator;
}

//test
console.log(palindrome("madam"));

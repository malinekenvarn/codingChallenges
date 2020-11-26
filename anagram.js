/*Challenge # 3
 Input: two strings. Output: a boolean value. Purpose of this function: To determine if the strings are anagrams of each other.
 My solution: If 2 strings are anagram, they should have the same length. Then  I sort alphabetically and compare.
 I used Array.from() to convert to array to sort, then JSON.stringify() to make them strings again.
 When I compared to how others have solved this, I learned that one can also solve this is with split() and join(). 
*/


function isAnagram(str1, str2){

    if(str1.length!=str2.length){
        return false;
    }

    const str1Arr = Array.from(str1).sort(); 
    const str2Arr = Array.from(str2).sort(); 

    
    return JSON.stringify(str1Arr)===JSON.stringify(str2Arr);
    
}


//test
console.log(isAnagram("hello", "olleh"));



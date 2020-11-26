//Challenge # 2
//Input: a string with a word or sentence. Output: a string representing the most common character in that word/sentence.


function countingChars(str){

    //This function works with an object that at the beginning is empty
    const occuringChars = {};
    let char = "";
    let count = 0;

    /*In this forloop each character will become a property, and then every time a character occurs more than once,
     the count will be in corresponding property.*/
    for(let i=0; i<str.length; i++){
        occuringChars.hasOwnProperty(str[i]) ? occuringChars[str[i]]++ : occuringChars[str[i]] = 1;  
       }
       
    /*Then loop through object. In the variable count, every time a higer number occurs, the value will be transferred to it. 
    The variable char will hold the character that has the highest count  */
    for(const key of Object.keys(occuringChars)){
        if(occuringChars[key]>count){
            count = occuringChars[key];
            char = key;
        }
    }

    return char;
}

//Test function by console.log()
console.log("The most commonly used char is: "+countingChars("anna greta"));









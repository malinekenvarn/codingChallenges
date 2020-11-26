//Challenge # 1
//The task is to write a function that takes an array of strings as an argument, and return the longest string.

let stringArr = ["cat", "vanderpump", "malin", "dog", "horse", "tryptophobia", "sweden rock festival", "window", "tacos"];
let longestStr = "";



const longestString = (arr)=>{
    arr.forEach((item) =>{
        if(item.length > longestStr.length)
        longestStr = item; 
    })
    return longestStr;
}

  console.log(longestString(stringArr));
    
    


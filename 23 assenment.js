 function sortAlpha(word) {
    return [...word].sort((a,b)=>a.localeCompare(b)).join("")
}
 
let randomWord = "subbarayuduchinna";
console.log(sortAlpha(randomWord));
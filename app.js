
function anagramGc(words) {

    function sortString(str) {
        return str.split('').sort().join('');
    }

    let anagram = {};
    
    for (const word of words) {
        const sortedWord = sortString(word);
        if (!anagram[sortedWord]) {
            anagram[sortedWord] = [];
        }
        anagram[sortedWord].push(word);
    }

    
    return Object.values(anagram);
}


let userinp = ["bat", "tap", "cat", "tab", "pat"];
let result = anagramGc(userinp);
console.log(result);

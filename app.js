
function anagramGc(words) {

    function sortString(str) {
        return str.split('').sort().join('');
    }

    let anagram = {};
    
    for (const ana of anas) {
        const sortedWord = sortString(ana);
        if (!anagram[sortedWord]) {
            anagram[sortedWord] = [];
        }
        anagram[sortedWord].push(ana);
    }

    
    return Object.values(anagram);
}


let userinp = ["bat", "tap", "cat", "tab", "pat"];
let result = anagramGc(userinp);
console.log(result);

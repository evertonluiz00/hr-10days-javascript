function vowelsAndConsonants(s) {
    
    console.log("\n> Vowels:");
    for (var str in s) {
        if ("aeiou".indexOf(s[str]) !== -1)
        console.log(s[str]);
    }

    console.log("\n> Consonants:");
    for (var str in s) {
        if ("aeiou".indexOf(s[str]) === -1)
        console.log(s[str]);
    }
}

function main() {
    const s = "javascriptloops";
    
    vowelsAndConsonants(s);
}

main();
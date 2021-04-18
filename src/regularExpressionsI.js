function regexVar() {
    // It must match a string that starts and ends with the same vowel{a, e, i, o, u})
    const re = /^(a|e|i|o|u).*\1$/;
    return re;
}


function main() {
    const re = regexVar();
    const s = "bcdb";
    
    console.log(re.test(s));
}

main();
function reverseString(s) {
    try {
        console.log(s.split('').reverse().join(''));
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }
}

function main() {
    const s = 1234;
    
    reverseString(s);
}

main();
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    
    console.log(firstInteger + Number(secondInteger));
    console.log(firstDecimal + Number(secondDecimal));
    console.log(firstString + secondString);
}

function main() {
    const secondInteger = "12";
    const secondDecimal = "4.32"
    const secondString = "is the best place to learn and practice coding!";
    
    performOperation(secondInteger, secondDecimal, secondString);
}

main();
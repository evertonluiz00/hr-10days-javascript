function factorial(n) {
    if (n > 1) {
        calc += ` * ${n-1}`;
        return n * factorial(n -1);
    }

    return 1;
}

let num = 4;
let calc = `${num}`;
let total = factorial(num)

console.log(`${num}! = ${calc} (${total})`);
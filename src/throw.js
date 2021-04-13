function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a < 0) {
        throw new Error("Negative Error");
    } else {
        throw new Error("Zero Error");
    }
}

function main() {
    const a = -1;
    
    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}

main();
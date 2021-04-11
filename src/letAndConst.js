function main() {
    const PI = 3.141592653589793;
    let r = 2.6;
    
    console.log("PI        : " + PI)
    console.log("Radius    : " + r)

    console.log("Area      : " + PI * Math.pow(r, 2));
    console.log("Perimeter : " + 2 * PI * r);

    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("\nYou correctly declared 'PI' as a constant.");
    }
}

main();
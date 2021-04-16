function sides(literals, ...expressions) {
    let [ a, p ] = expressions;

    let s1 = (p + Math.sqrt((Math.pow(p, 2) - (16 * a)))) / 4;
    let s2 = (p - Math.sqrt((Math.pow(p, 2) - (16 * a)))) / 4;

    return [s1, s2].sort();
}

function main() {
    let s1 = 10;
    let s2 = 14;
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}

main();

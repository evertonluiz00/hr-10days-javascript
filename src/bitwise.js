function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b <= n; b++) {
            max = (a & b) < k && (a & b) > max ? (a & b) : max;
        }
    }

    return max;
}


function main() {
    const q = 1;
    
    for (let i = 0; i < q; i++) {
        const [n, k] = [5, 2]
        
        console.log(getMaxLessThanK(n, k));
    }
}

main();
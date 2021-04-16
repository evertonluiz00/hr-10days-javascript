function modifyArray(nums) {
    return nums.map(s => s & 1 ? s * 3 : s * 2);
    //return nums.map(s => s % 2 == 0 ? s * 2 : s * 3);
}


function main() {
    const n = 5;
    const a = [1, 2, 3, 4, 5];
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}

main();
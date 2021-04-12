/**
*   Return the second largest number in the array.
**/
function getSecondLargest(nums) {
    let largest = second = 0;

    for (let i of nums) {
        if (i > largest) {
            second = largest;
            largest = i;
        } else if (i != largest && i > second) {
            second = i;
        }
    }

    return second;
}


function main() {
    const nums = [2,3,6,6,30,5,29];
    
    console.log(getSecondLargest(nums));
}

main();
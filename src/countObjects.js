function getCount(objects) {
    let count = 0;

    for (let o in objects) {
        count += objects[o].x == objects[o].y ? 1 : 0;
    }

    return count;
}


function main() {
    const n = 5;
    let objects = [
        {
            "x":1, 
            "y":1
        },
        {
            "x":2, 
            "y":3
        },
        {
            "x":3, 
            "y":3
        },
        {
            "x":3, 
            "y":4
        },
        {
            "x":4, 
            "y":5
        }
    ];
    
    console.log(getCount(objects));
}

main();
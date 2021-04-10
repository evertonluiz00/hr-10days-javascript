console.log("\n> Write a number:");

process.stdin.on('data', function (data) {
    main(+(data));
});


/**
 * for
 */
function main(input) {
    for (var i = 1; i <= input; i++) {
        process.stdout.write(i + " ");
    }

    console.log("\n\n> Write a number:");
}


/**
 * while
 */
 function main(input) {
    var i = 1;

    while (i <= input) {
        process.stdout.write(i + " ");

        i++;
    }

    console.log("\n\n> Write a number:");
}


/**
 * do-while
 */
 function main(input) {
    var i = 1;

    do {
        process.stdout.write(i + " ");

        i++;
    } while (i <= input);

    console.log("\n\n> Write a number:");
}


/**
 * for-in
 */
 var actress = {
    firstName: "Julia",
    lastName: "Roberts",
    dateOfBirth: "October 28, 1967",
    nationality: "American",
    firstMovie: "Satisfaction"
};

for (var property in actress) {
    console.log("actress." + property + " = " + actress[property]);
}


/**
 * for-of
 */
 let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}

// Print each Key and Value as "Key: Value"
console.log();
for (let info of actress) {
    console.log(info[0] + ": " + info[1]);
}
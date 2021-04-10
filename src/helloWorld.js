let inputString = '';
let isExit = false;

process.stdin.on('data', inputStdin => {
    inputString = inputStdin.toString().trim();

    if (isExit) {
        if (inputString.toUpperCase() === 'Q') {
            process.exit();    
        } else {
            console.log("\n---------------------------------");
            message();
        }
    } else {
        console.log("\n> You entered the following text:");
        console.log(inputString);

        console.log("\n> Press 'q' to exit:");
        isExit = true;
    }
});

function message() {
    isExit = false;
    console.log("\n> Write something:");
}

message();
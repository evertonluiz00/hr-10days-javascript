let inputString = '';

console.log("\n> Write something:");

process.stdin.on('data', inputStdin => {
    inputString = inputStdin.toString().trim();

    console.log("\n> You entered the following text in the Input box:");
    console.log(inputString);

    process.exit();
});
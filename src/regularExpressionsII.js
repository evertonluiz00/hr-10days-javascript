function regexVar() {
    /*
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = /^(Mrs?|Ms|Dr|Er)\.[a-zA-Z]+$/;
    return re;
}


function main() {
    const re = regexVar();
    const s1 = "Mr.X"; // It must return True
    const s2 = "Mrs.Y"; //It must return True
    const s3 = "Dr#Joseph"; // It must return False
    const s4 = "Er .Abc"; // It must return False
    
    console.log("S1: " + !!s1.match(re));
    console.log("S2: " + !!s2.match(re));
    console.log("S3: " + !!s3.match(re));
    console.log("S4: " + !!s4.match(re));
}

main();
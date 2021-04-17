function getDayName(dateString) {
    let dayName;
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = new Date(dateString).getDay();
    dayName = weekday[day];
    
    return dayName;
}


function main() {
    const date = '11/10/2010';
    console.log(getDayName(date));
}

main();
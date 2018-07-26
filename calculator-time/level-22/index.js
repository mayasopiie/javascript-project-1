//let time1 = new Date("December 25, 1995 23:15:30");
const time1 = new Date("March 4, 1969 00:00:00");
const time2 = new Date("July 20, 1995 22:39:59");


function calculateTimeInterval(time1, time2) {
    const year1 = time1.getFullYear();
    const month1 = time1.getMonth();
    const date1 = time1.getDate();
    const hour1 = time1.getHours();
    const minute1 = time1.getMinutes();
    const second1 = time1.getSeconds();

    const year2 = time2.getFullYear();
    const month2 = time2.getMonth();
    const date2 = time2.getDate();
    const hour2 = time2.getHours();
    const minute2 = time2.getMinutes();
    const second2 = time2.getSeconds();

    let yearInterval = 0;
    let monthInterval = 0;
    let dateInterval = 0;
    let hourInterval = 0;
    let minuteInterval = 0;
    let secondInterval = 0;

    //--- If Time 2 is MORE RECENT than Time 1
    if (time2 > time1){
        //--- Processing SECOND Interval
        if (second2 == 0){
            secondInterval = 60 - second1;
        }
        else{
            secondInterval = second2 - second1;
        }
        if (secondInterval == 60){
            secondInterval = 0;
        }

        //--- Processing MINUTE Interval
        if (minute2 == 0){
            if (secondInterval < 0){
                secondInterval = Math.abs(secondInterval);
                minuteInterval = 60 - minute1 - 1;
            }
            else{
                minuteInterval = 60 - minute1;
            }
        }
        else{
            minuteInterval = minute2 - minute1;
        }
        if (minuteInterval == 60){
            minuteInterval = 0;
        }

        //--- Processing HOUR Interval
        if (hour2 == 0){
            if (minuteInterval < 0){
                minuteInterval = Math.abs(minuteInterval);
                hourInterval = 24 - hour1 - 1;
            }
            else{
                hourInterval = 24 - hour1;
            }
        }
        else{
            hourInterval = hour2 - hour1;
        }
        if (hourInterval == 24){
            hourInterval = 0;
        }

        //--- Processing date Interval
        if (hourInterval < 0){
            hourInterval = Math.abs(hourInterval);
            dateInterval = date2 - date1 - 1;
        }
        else{
            dateInterval = date2 - date1;
        }

        //--- Processing MONTH Interval
        if (dateInterval < 0){
            dateInterval = Math.abs(dateInterval);
            monthInterval = month2 - month1 - 1;
        }
        else{
            monthInterval = month2 - month1;
        }

        //--- Processing YEAR Interval        
        if (monthInterval < 0){
            monthInterval = Math.abs(monthInterval);
            yearInterval = year2 - year1 - 1;
        }
        else{
            yearInterval = year2 - year1;
        }
    }
    else{
        //--- Processing SECOND Interval
        if (second1 == 0){
            secondInterval = 60 - second2;
        }
        else{
            secondInterval = second1 - second2;
        }
        if (secondInterval == 60){
            secondInterval = 0;
        }

        //--- Processing MINUTE Interval
        if (minute1 == 0){
            if (secondInterval < 0){
                secondInterval = Math.abs(secondInterval);
                minuteInterval = 60 - minute2 - 1;
            }
            else{
                minuteInterval = 60 - minute2;
            }
        }
        else{
            minuteInterval = minute1 - minute2;
        }
        if (minuteInterval == 60){
            minuteInterval = 0;
        }

        //--- Processing HOUR Interval
        if (hour1 == 0){
            if (minuteInterval < 0){
                minuteInterval = Math.abs(minuteInterval);
                hourInterval = 24 - hour2 - 1;
            }
            else{
                hourInterval = 24 - hour2;
            }
        }
        else{
            hourInterval = hour1 - hour2;
        }
        if (hourInterval == 24){
            hourInterval = 0;
        }

        //--- Processing date Interval
        if (hourInterval < 0){
            hourInterval = Math.abs(hourInterval);
            dateInterval = date1 - date2 - 1;
        }
        else{
            dateInterval = date1 - date2;
        }

        //--- Processing MONTH Interval
        if (dateInterval < 0){
            dateInterval = Math.abs(dateInterval);
            monthInterval = month1 - month2 - 1;
        }
        else{
            monthInterval = month1 - month2;
        }

        //--- Processing YEAR Interval        
        if (monthInterval < 0){
            monthInterval = Math.abs(monthInterval);
            yearInterval = year1 - year2 - 1;
        }
        else{
            yearInterval = year1 - year2;
        }
    }
    console.log(`Time 1: ${time1}`);
    console.log(`Time 2: ${time2}`);
    console.log("The Interval of Time is:");
    console.log(`${yearInterval} years`);
    console.log(`${monthInterval} months`);
    console.log(`${dateInterval} days`);
    console.log(`${hourInterval} hours`);
    console.log(`${minuteInterval} minute`);
    console.log(`${secondInterval} seconds`);
}

calculateTimeInterval(time1, time2);

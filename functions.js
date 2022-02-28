function hello(){
    return "hello";
}

function kg2Lbs(nKg){
    let nLbs =  nKg * 2.20462
    return Number(nLbs.toFixed(2))
}

function convertDate(sDate){
    let aDate = sDate.split('-');
    let nYear = Number(aDate[0]);
    let nMonth = Number(aDate[1]);
    let nDay = Number(aDate[2]);
    let sSuffix = "th";
    if(nDay == 1){
        sSuffix = "st";
    }else if(nDay == 2){
        sSuffix = "nd";
    }else if(nDay == 3){
        sSuffix = "rd";
    }
    let aMonths = ["none", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${aMonths[nMonth]} ${nDay}${sSuffix}, ${nYear}`;
}

function volume(nDiameter){
    let nRadius = nDiameter/2;
    let nVolume = (4/3)* Math.PI * Math.pow(nRadius, 3);
    return Number(nVolume.toFixed(2));
}

export {hello, kg2Lbs, convertDate, volume}
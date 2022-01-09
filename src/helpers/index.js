export const extractMapData =   ({battle_royale}) => {
    if(!battle_royale) return null;
    const {current, next} = battle_royale;
    const formattedCurrent = formatMapData(current);
    const formattedNext = formatMapData(next);
    return [formattedCurrent, formattedNext]

}



const formatMapData = (mapObj) => {
    const {
            remainingMins,
            map: mapName,
            DurationInMinutes: duration,
            readableDate_start: startDate,
            readableDate_end: endDate,
            asset: mapImage
         } = mapObj;

    const formattedObj = {
        duration,
        remainingMins, 
        mapName, 
        startDate, 
        endDate, 
        mapImage
    }


    return formattedObj;

}


export const formatDate = (dateStr, toObject = false) => {
    let event = new Date(dateStr +'Z')
    if(toObject) return event;
    let eventStr = event.toLocaleString('en', {timeZone: 'PST'});
    console.log('New Date String:', eventStr)
    
    let dateArr = eventStr.replace(',', "").split(' ');
    console.log(dateArr)

    dateArr[1] = dateArr[1].split('').slice(0, dateArr[1].length - 3).join('')
     
    

    return dateArr;
     
    
}

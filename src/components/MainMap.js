import React, {useState, useEffect} from 'react';
import { formatDate } from '../helpers';



import './MainMap.css';




function MainMap({currentMap, setFetchNext, fetchNext}) {
    
    

        //TODO: Fetch happens when timer hits zero, but still need to update the time --> using setFutureTime? 

        const futureTime = formatDate(currentMap.endDate, true);

        const [currentTime, setCurrentTime] = useState([]);



       function formatTime(time, timeType) {


        if(time <= 0 || time === undefined) return '';

        if(timeType === 'seconds') return `${time}`;

        if(timeType === 'seconds' && time === undefined) return '';


    

        return `${time}:`;

       }


       function updateTimer() {

        const formattedHours= formatTime(currentTime[0], 'hours');
        let formattedMinutes = formatTime(currentTime[1], 'minutes');
        let formattedSeconds = formatTime(currentTime[2], 'seconds');


        if(formattedMinutes !== '') {
          formattedSeconds = formattedSeconds.padStart(2, '0')
        }
        
        if(formattedHours !== '') {
            formattedMinutes = formattedMinutes.padStart(3, '0')
        }



       

        return `${formattedHours}${formattedMinutes}${formattedSeconds}`


       }


       function fetchNextMap() {
           setFetchNext(true);
       }



     

     useEffect(() => {

        const intervalId = setInterval(() => {


            let now = new Date().getTime();
            let timeLeft = futureTime.getTime() - now;

            if(timeLeft <= 0) {
                fetchNextMap();
                clearInterval(intervalId);
            }


            

            
            
        
            let hours = timeLeft > 0 ? Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0
            let minutes = timeLeft > 0 ? Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) : 0
            let seconds = timeLeft > 0 ? Math.floor((timeLeft % (1000 * 60)) / 1000) : 0
            
            setCurrentTime([hours, minutes, seconds]);




        }, 1000)


        return () => {
           clearInterval(intervalId);
        }

    }, [setFetchNext, fetchNext])



 
   
    return (
        <div className='main-map' style={{backgroundImage: `url(${currentMap.mapImage})`}}>
            <div className='main-map__info'>
                <h1 className='main-map__title'>{currentMap.mapName}</h1>
                <p className='main-map__timer'>
                   {updateTimer()} 
                </p>
                <div className='main-map__btns'>
                    <button className='main-map__btn'>Check Map</button>
                    <button className='main-map__btn'>Ranked</button>
                </div>

            </div>
        </div>
    )
}

export default MainMap

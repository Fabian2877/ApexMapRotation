import React from 'react';
import { formatDate} from '../helpers';
import './Map.css'

import { stormPointImages } from '../assets/images/stormpoint';
import {worldsEdgeImages} from '../assets/images/worlds-edge';





function Map({currentMap}) {
    
    const mapName = currentMap.mapName;
    const mapImage = getRandomImage(mapName);

    const [startDate, startTime, startTOD] = formatDate(currentMap.startDate)
    const [endDate, endTime, endTOD] = formatDate(currentMap.endDate)
   
  

    function getRandomImage(mapName) {
        let image;

        if(mapName === 'Storm Point') {
            image = stormPointImages[Math.floor(Math.random() * stormPointImages.length)]
        } else if(mapName === `World's Edge`) {
            image = worldsEdgeImages[Math.floor(Math.random() * worldsEdgeImages.length)]
        }



        return image;


    }



    return (
        <div className='map'>
             <img src={mapImage} alt={currentMap.mapName} className='map__image'/>
             <div className='map__info'>
              <p className='map__info__name'>{currentMap.mapName}</p>
              <p className='map__info__date'>{`${startDate}`}</p>
              <p className='map__info__interval'>{`${startTime} ${startTOD} - ${endTime} ${endTOD}`}</p>
            </div>
        </div>
    )
}

export default Map

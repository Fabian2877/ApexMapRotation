import React, {useState, useEffect} from 'react'
import {useFetch} from './hooks/useFetch';
import {BASE_URL, MAP_ROTATION} from './assets/endpoints/endpoints';
import {extractMapData} from './helpers/index';








import Navbar from './components/Navbar';
import Map from './components/Map';
import MainMap from './components/MainMap';
import ShowMore from './components/showMore';

import './App.css'




function App() {
    console.log('RENDER')
    const {isLoading, setFetchNext, fetchedData, fetchNext} = useFetch(BASE_URL, MAP_ROTATION);
    const [formattedData, setFormattedData] = useState(null);
    
     console.log('app loading', isLoading)
    
     
     useEffect(() => { 
         if(fetchedData) {
             let results = extractMapData(fetchedData);
             setFormattedData(results);
         }
     }, [fetchedData, fetchNext])



     function renderLoader() {
       return (
            <div class="ui active dimmer">
             <div class="ui massive loader"></div>
            </div>

       )
     }
     
     console.log(isLoading)
     
  
     return (
        <div className='app'>
            <Navbar/>
            <div className='container'>
             {isLoading ? renderLoader() : <>
             {formattedData && <MainMap currentMap={formattedData[0]} setFetchNext={setFetchNext} fetchNext={fetchNext} isLoading={isLoading} />}
             {formattedData && <Map currentMap={formattedData[1]}/>}
             {formattedData && <ShowMore/>} 
             
             </>}
            </div>
        </div>
    )
}

export default App

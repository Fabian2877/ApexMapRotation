import {useState, useEffect} from 'react';







export const useFetch = (url, query) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState({});
    const [fetchNext, setFetchNext] = useState(false);





    useEffect(() => {
        
        setIsLoading(true);
        const fetchData = async () => {
            try {
              let res = await fetch(`${url}${query}${process.env.REACT_APP_KEY}`);
              let data = await res.json();
              
              setFetchedData(data);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000)

            }catch(e) {
                console.log(e)
            }
         }

         fetchData();

          
        if(fetchNext) {
            setFetchNext(false)
        }
       
    }, [fetchNext, setFetchedData])



    return {
        isLoading, 
        fetchedData, 
        setFetchNext,
        fetchNext
    }


  


}
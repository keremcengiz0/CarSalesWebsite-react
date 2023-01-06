import axios from "axios";
import React, {useEffect, useState} from "react";

function Advert() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [advertList, setAdvertList] = useState([]);

    useEffect(() => {
        axios
        .get("/adverts")
        .then((response) => {
            const {adverts} = response.data;
            setIsLoaded(true);
            setAdvertList(adverts);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
        .catch(error => console.log(error))
    }, []);

    if(error) {                                                      
        return <div> Error!!! </div>
    } else if(!isLoaded) {                                       
        return <div> Loading... </div>
    } else {                                                          
        return(
            <ul>
                {advertList.map(advertDto =>(
                    <li>
                        {advertDto.title}
                    </li>
                ))}
            </ul>
        
        );
    }
}
export default Advert;
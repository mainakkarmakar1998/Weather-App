import React , {useEffect, useState} from "react";
import './style.css';

const App = () =>{
    const[city , setCity] = useState(null);
    const[search, setSearch]=useState(null); 
    const[wt, wGet]=useState(null);
    const[icon,getIcon]=useState(null);
    
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let day = weekday[d.getDay()];
    const iconurl= `http://openweathermap.org/img/wn/${icon}.png`;  
    useEffect ( () => {
        const fetchApi = async() => {
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=27276d912ba883cb4d1399268125be19`;
            const response = await fetch(url);
            const resJson= await response.json();
            setCity(resJson.main);
            try{
                wGet(resJson.weather[0].main);
                getIcon(resJson.weather[0].icon);
                console.log(icon);
            }
            catch{
           
            }      
        };
        fetchApi();
    },[search] )
   
    return( <>
            <div>
            <h1 className="Heading">Weather Forecast Application</h1>
            <div className="Box">
                <div className="daydiv">
                <h1 className="day">{day}</h1>
                </div><hr></hr>
                <div className="inputData">
                
                    <label className="label">Enter the City</label>&nbsp;<input type="search" value={search}Cel className="inputField" onChange={(event)=>{setSearch(event.target.value)}}/>

                </div>
                {
                    !city? (
                        <p className="errorMsg"> City Not Found</p>
                    ) :(
                        <div className="D">  
                        
                            <div className="info">
                            
                                
                                <h2 className="location">{search} </h2>
                                <h1 className="weather">{wt}&nbsp;<img  className="image" src={iconurl} height={40} width={40}/></h1>
                                <h1 className="citytemp">{city.temp}°Cel </h1>
                                <h3> <span>Min : {city.temp_min}°Cel&nbsp;</span> &nbsp;<span>Max : {city.temp_max}°Cel</span></h3>
                                
                            </div>
                        </div>
                    )
                }  
                    
                
            </div>
            </div>

    </>
    )

}
export default App;
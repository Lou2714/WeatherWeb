import WeatherForecastCard from "./components/WeatherForecastCard";
import weatherImage from "./assets/icons8-clima-240.png"
import todaysWeather from "./assets/calendario_24.png"
import location from "./assets/marcador-de-posicion_24.png"
import precip from "./assets/icons8-precipitación-24.png"
import humidity from "./assets/icons8-humedad-24.png"
import currentWeatherService from "./services/CurrentWeatherService";
import forecastService from "./services/ForecastService";
import { useState, useEffect } from "react";
import ErrorAlert from "./components/ui/Feedback/ErrorAlert";
import Progress from "./components/ui/Feedback/Progress";
import DetailItem from "./components/DetailItem";


const WeatherWebPage = () =>{
    const [temperature, setTemperature] = useState('');
    const [humidityPercentage, setHumidityPercentage] = useState('');
    const [precipitation, setPrecipitation] = useState('');
    const [date, setDate] = useState('');
    const [locationName, setLocationName] = useState({});
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [navigatorPermissionError, setNavigatorPermissionError] = useState(false);

    useEffect(()=>{
        todaysDate();
        navigator.geolocation.getCurrentPosition(fetchCurrentWeather, navigatorDenial);
    },[])

    const fetchCurrentWeather = async(position) =>{
        try {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let currentTemperature = await currentWeatherService.currentTempC(latitude, longitude);
            setTemperature(currentTemperature);
            let currentHumidityPercentage = await currentWeatherService.currentHumidity(latitude, longitude);
            setHumidityPercentage(currentHumidityPercentage);
            let currentPrecipitation = await currentWeatherService.currentPrecipitation(latitude, longitude);
            setPrecipitation(currentPrecipitation);
            let currentLocationName = await currentWeatherService.currentLocation(latitude, longitude);
            setLocationName(locationName =>({
                ...locationName,
                ...currentLocationName
            }));
            let forecastDays = await forecastService.forecastDay(latitude, longitude);
            setForecast(forecastDays);
        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false);
        }
    }

    const todaysDate = () => {
        let date = new Intl.DateTimeFormat("es-ES", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: 'numeric'
        }).format(new Date());
        setDate(date);
    }

    const navigatorDenial = () =>{
        setNavigatorPermissionError(true);
    }

    return(
        <>
        {navigatorPermissionError && (<ErrorAlert message={'No hay permisos de navegación'} />)} 

        <div className="text-center font-display bg-WeatherWebPage h-dvh lg:w-full">
            <h1 className="text-4xl font-bold p-5 md:p-8 lg:p-12 xl:pb-2">Weather Web</h1>
            <div className="flex flex-col place-self-center sm:flex-row sm:justify-center">
                <img src={weatherImage} className="w-36 h-36 sm:w-auto sm:h-auto place-self-center" alt="Clima del día de hoy" />
                {
                    loading ? (
                        <Progress />
                    ) : (
                <div className="grid grid-rows-3 grid-cols-2 gap-2 place-items-start items-center w-2xs m-2 md:w-3xl md:p-10">
                    <h1 className="col-span-2 text-3xl font-medium place-self-center">{`${temperature}°C`}</h1>
                    <DetailItem 
                        image={todaysWeather}
                        text={date}
                    />
                    <DetailItem 
                        image={location}
                        text={`${locationName.name}, ${locationName.country}`}
                    />
                    <DetailItem 
                        image={precip}
                        text={`${precipitation} mm`}
                    />
                    <DetailItem 
                        image={humidity}
                        text={`${humidityPercentage}%`}
                    />
                </div> 
                )}
            </div>
            <div className="flex flex-col p-2 w-full place-items-center bg-WeatherWebPage sm:flex-row sm:flex-wrap sm:justify-center-safe sm:p-5 md:p-10 gap-5 lg:p-0">
                { loading ? (
                    <Progress />
                ) : forecast.map((day) => (
                    <WeatherForecastCard
                        key={day.date}
                        date={day.date}
                        conditionIcon = {day.day.condition.icon}
                        maxTempC = {day.day.maxtemp_c}
                        minTempC = {day.day.mintemp_c}
                    />
                ))
                }
            </div>
        </div>
        </>
    )
}

export default WeatherWebPage;
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
        {navigatorPermissionError && (<ErrorAlert message={'No hay permisos de navegación'} /> )} 

        <div className="text-center font-display bg-WeatherWebPage h-dvh">
            <h1 className="text-4xl font-bold p-16">Weather Web</h1>
            <div className="flex flex-row justify-center gap-10 9-5">
                <img src={weatherImage} alt="Clima del día de hoy" />
                <div className="grid grid-rows-3 grid-cols-2 gap-2 place-items-start items-center w-xl">
                    <h1 className="col-span-2 text-3xl font-medium place-self-center">{
                    loading ? (
                        <Progress />
                    ) :
                    `${temperature}°C`}</h1>
                    <section className="flex flex-row gap-5">
                        <img src={todaysWeather} alt="Calendario" className="place-self-center" />
                        <p className="text-lg font-medium">{date}</p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={location} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">{
                        loading ? (
                            <Progress />
                        ) :
                        `${locationName.name},${locationName.country}`}</p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={precip} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">{
                            loading ? (
                                <Progress />
                            ) :
                            `${precipitation} mm`}
                        </p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={humidity} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">{
                        loading ? (
                            <Progress />
                        ) :
                        `${humidityPercentage}%`}</p>
                    </section>
                    
                </div>
            </div>
            <div className="flex flex-row justify-center gap-10 m-10">
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
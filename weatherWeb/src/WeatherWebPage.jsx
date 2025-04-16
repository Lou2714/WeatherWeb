import WeatherForecastCard from "./components/WeatherForecastCard";
import weatherImage from "./assets/icons8-clima-240.png"
import todaysWeather from "./assets/calendario_24.png"
import location from "./assets/marcador-de-posicion_24.png"
import precip from "./assets/icons8-precipitación-24.png"
import humidity from "./assets/icons8-humedad-24.png"
import currentWeatherService from "./services/CurrentWeatherService";
import { useState, useEffect } from "react";

const WeatherWebPage = () =>{
    const [temperature, setTemperature] = useState('');
    const [humidityPercentage, setHumidityPercentage] = useState('');
    const [precipitation, setPrecipitation] = useState('');
    const [condition, setCondition] = useState('');
    const [date, setDate] = useState('');

    useEffect(()=>{
        fetchCurrentWeather();
        todaysDate();
    },[])

    const fetchCurrentWeather = async() =>{
        let currentTemperature = await currentWeatherService.currentTempC('Soyapango');
        setTemperature(currentTemperature);
        let currentHumidityPercentage = await currentWeatherService.currentHumidity('Soyapango');
        setHumidityPercentage(currentHumidityPercentage);
        let currentPrecipitation = await currentWeatherService.currentPrecipitation('Soyapango');
        setPrecipitation(currentPrecipitation);
        let currentCondition = await currentWeatherService.currentCondition('Soyapango');
        setCondition(currentCondition.text);
        
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

    return(
        <div className="text-center font-display bg-WeatherWebPage h-dvh">
            <h1 className="text-4xl font-bold p-16">Weather Web</h1>
            <div className="flex flex-row justify-center gap-10 9-5">
                <img src={weatherImage} alt="Clima del día de hoy" />
                <div className="grid grid-rows-3 grid-cols-2 gap-2 place-items-start items-center w-xl">
                    <h1 className="col-span-2 text-3xl font-medium place-self-center">{temperature}°C</h1>
                    <section className="flex flex-row gap-5">
                        <img src={todaysWeather} alt="Calendario" className="place-self-center" />
                        <p className="text-lg font-medium">{date}</p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={location} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">Usulutan, El Salvador</p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={precip} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">{precipitation} mm</p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={humidity} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">{humidityPercentage}%</p>
                    </section>
                    
                </div>
            </div>
            <div className="flex flex-row justify-center gap-10 m-10">
                <WeatherForecastCard/>
                <WeatherForecastCard/>
                <WeatherForecastCard/>
            </div>
        </div>
    )
}

export default WeatherWebPage;
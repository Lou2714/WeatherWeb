import weatherImage from "../assets/weather-forecast.png"

const WeatherForecastCard = () =>{
    return(
        <div className="w-48">
            <div className="bg-WForecastCardDay text-center rounded-t-xl p-0.5">
                <h1 className="text-xl font-semibold">Martes</h1>
            </div>
                <div className="bg-WForescastCardBody justify-items-center rounded-b-xl p-4">
                    <img src={weatherImage} alt="Today's-Weather" />
                    <h3 className="pt-3 text-lg font-semibold">28.8°C</h3>
            </div>
        </div>
    );
}

export default WeatherForecastCard;
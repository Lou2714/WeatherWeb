import WeatherForecastCard from "./components/WeatherForecastCard";
import weatherImage from "./assets/icons8-clima-240.png"
import todaysWeather from "./assets/calendario_24.png"
import location from "./assets/marcador-de-posicion_24.png"
import precip from "./assets/icons8-precipitación-24.png"
import humidity from "./assets/icons8-humedad-24.png"

const WeatherWebPage = () =>{
    return(
        <div className="text-center font-display bg-WeatherWebPage h-dvh">
            <h1 className="text-4xl font-bold p-16">Weather Web</h1>
            <div className="flex flex-row justify-center gap-10 9-5">
                <img src={weatherImage} alt="Clima del día de hoy" />
                <div className="grid grid-rows-3 grid-cols-2 gap-2 place-items-start items-center w-xl">
                    <h1 className="col-span-2 text-3xl font-medium place-self-center">25°C</h1>
                    <section className="flex flex-row gap-5">
                        <img src={todaysWeather} alt="Calendario" className="place-self-center" />
                        <p className="text-lg font-medium">Lunes 14 de abril</p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={location} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">Usulutan, El Salvador</p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={precip} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">0.55 mm</p>
                    </section>
                    <section className="flex flex-row gap-5">
                        <img src={humidity} alt="Lugar" className="place-self-center" />
                        <p className="text-lg font-medium">35%</p>
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
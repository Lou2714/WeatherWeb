import maxTemp from "../assets/alta-temperatura.png"
import minTemp from "../assets/mas-frio.png"

const WeatherForecastCard = ({ date, conditionIcon, maxTempC, minTempC }) =>{

    return(
        <div className="w-fit">
            <div className="bg-WForecastCardDay sm:w-52 text-center rounded-t-xl p-0.5">
                <h1 className="text-xl font-semibold">{date}</h1>
            </div>
                <div className="bg-WForescastCardBody sm:w-52 justify-items-center rounded-b-xl p-4">
                    <img src={conditionIcon} alt="Today's-Weather" />
                    <section className="flex flex-row gap-6">
                        <section className="flex flex-row">
                            <img src={maxTemp} alt="Máxima temperatura" className="place-self-center"/>
                            <h3 className="pt-3 text-lg font-semibold">{maxTempC}°C</h3>
                        </section>
                        <section className="flex flex-row">
                            <img src={minTemp} alt="Máxima temperatura" className="place-self-center"/>
                            <h3 className="pt-3 text-lg font-semibold">{minTempC}°C</h3>
                        </section>
                    </section>
            </div>
        </div>
    );
}

export default WeatherForecastCard;
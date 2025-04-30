import maxTemp from "../assets/alta-temperatura.png"
import minTemp from "../assets/mas-frio.png"
import DetailItem from "./DetailItem";

const WeatherForecastCard = ({ date, conditionIcon, maxTempC, minTempC }) =>{

    return(
        <div className="w-fit">
            <div className="bg-WForecastCardDay sm:w-52 lg:w-72 text-center rounded-t-xl p-0.5">
                <h1 className="text-xl lg:text-2xl font-semibold lg:place-self-center-safe">{date}</h1>
            </div>
                <div className="bg-WForescastCardBody sm:w-52 lg:w-72 justify-items-center rounded-b-xl p-4 lg:p-0">
                    <img src={conditionIcon} className="lg:w-32" alt="Today's-Weather" />
                    <section className="flex flex-row gap-6">
                        <DetailItem
                            image={maxTemp}
                            text={`${maxTempC}°C`}
                        />
                        <DetailItem
                            image={minTemp}
                            text={`${minTempC}°C`}
                        />
                    </section>
            </div>
        </div>
    );
}

export default WeatherForecastCard;
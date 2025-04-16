import axios from "axios";

const BASEURL = 'http://api.weatherapi.com/v1';
const weatherKey = import.meta.env.VITE_APIKEY_WEATHER;

const api = axios.create({
    baseURL:BASEURL,
    headers: {
        'Content-Type': 'application/json',
    },
})
const currentWeatherService = {
    currentTempC: async (location)=>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${location}`)
            console.log(response.data.current.temp_c);
            return response.data.current.temp_c
            
        } catch (error) {
            console.error(error);
        }
    },
    currentHumidity: async (location)=>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${location}`)
            console.log(response.data.current.humidity);
            return response.data.current.humidity;
        } catch (error) {
            console.error(error);
        }
    },
    currentPrecipitation: async (location)=>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${location}`)
            console.log(response.data.current.precip_mm);
            return response.data.current.precip_mm;
        } catch (error) {
            console.error(error);
        }
    },
    currentCondition: async (location)=>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${location}`)
            console.log(response.data.current.condition);
            return response.data.current.condition;
        } catch (error) {
            console.error(error);
        }
    }
}

export default currentWeatherService;
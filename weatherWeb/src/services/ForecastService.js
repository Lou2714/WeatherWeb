import axios from "axios";

const BASEURL = 'http://api.weatherapi.com/v1';
const weatherKey = import.meta.env.VITE_APIKEY_WEATHER;

const api = axios.create({
    baseURL:BASEURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const forecastService = {
    forecastDay: async (latitud, longitude) => {
        try {
            const response = await api.get(`/forecast.json?key=${weatherKey}&q=${latitud},${longitude}&days=3`)
            console.log(response.data.forecast.forecastday);
            return response.data.forecast.forecastday;
        } catch (error) {
            console.log(error);
        }
    }
}

export default forecastService;
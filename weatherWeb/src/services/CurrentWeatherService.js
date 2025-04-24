import axios from "axios";

const BASEURL = 'http://api.weatherapi.com/v1';
const weatherKey = import.meta.env.VITE_APIKEY_WEATHER;
//const weatherKey = '6d2ccdee0cf143c2808151817251404';

const api = axios.create({
    baseURL:BASEURL,
    headers: {
        'Content-Type': 'application/json',
    },
})
/*https://www.weatherapi.com/my/ */
const currentWeatherService = {
    currentTempC: async (latitud,longitude)=>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${latitud},${longitude}`)
            console.log(response.data.current.temp_c);
            return response.data.current.temp_c
            
        } catch (error) {
            console.error(error);
        }
    },
    currentHumidity: async (latitud,longitude)=>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${latitud},${longitude}`)
            console.log(response.data.current.humidity);
            return response.data.current.humidity;
        } catch (error) {
            console.error(error);
        }
    },
    currentPrecipitation: async (latitud,longitude)=>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${latitud},${longitude}`)
            console.log(response.data.current.precip_mm);
            return response.data.current.precip_mm;
        } catch (error) {
            console.error(error);
        }
    },
    currentCondition: async (latitud,longitude)=>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${latitud},${longitude}`)
            console.log(response.data.current.condition);
            return response.data.current.condition;
        } catch (error) {
            console.error(error);
        }
    },
    currentLocation: async (latitud,longitude) =>{
        try {
            const response = await api.get(`/current.json?key=${weatherKey}&q=${latitud},${longitude}`)
            let location = {
                name: response.data.location.name,
                country: response.data.location.country
            }
            return location;
        } catch (error) {
            console.error(error);
        }
    }
}

export default currentWeatherService;

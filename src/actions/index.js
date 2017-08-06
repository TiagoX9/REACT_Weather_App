import axios from 'axios';
const API_KEY = 'f5e491b8822581255502e27ef363ae86';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},cz`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
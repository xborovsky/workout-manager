import axios from 'axios';

export const API_KEY = 'a2a28d5010f0541813bab9559b7cda5ab38373ba';
const BASE_URL = 'https://wger.de//api/v2/';

export const fetchMusles = () => axios.get(`${BASE_URL}/muscle`)
    .then((res) => res.data.results);
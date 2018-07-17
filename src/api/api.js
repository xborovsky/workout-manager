import axios from 'axios';

export const API_KEY = 'a2a28d5010f0541813bab9559b7cda5ab38373ba';
const BASE_URL = 'https://wger.de//api/v2/';
const DEFAULT_LANG_ID = 2;

export const fetchMusles = () => axios.get(`${BASE_URL}/muscle`)
    .then((res) => res.data.results);

export const fetchEquipment = () => axios.get(`${BASE_URL}/equipment`)
    .then((res) => res.data.results);

export const fetchExercises = (muscleId, pageNum) =>
    axios.get(`${BASE_URL}/exercise?muscles=${muscleId}&language=${DEFAULT_LANG_ID}${pageNum && pageNum > 1 ? ('&page=' + pageNum) : ''}`)
        .then((res) => {
            return {
                exercises : res.data.results,
                hasNextPage : res.data.next !== null
            };
        });

export const fetchExerciseImages = (exerciseId) => axios.get(`${BASE_URL}/exerciseimage?exercise=${exerciseId}`)
    .then(res => res.data.results);
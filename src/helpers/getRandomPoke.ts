import axios from "axios";

export const getRandomPoke = async () => {
    let id = Math.floor(Math.random() * 150) + 1;
    let response =await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response;
}
import axios from "axios";

export const getRandomPoke = async () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const url = " https://pokeapi.co/api/v2/pokemon/";
    let response =await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data);
    return response.data;
}
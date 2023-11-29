"use client";
import axios from "axios";
import React, {useState } from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import Card from "../card/card";
import { getRandomPoke } from "@/helpers/getRandomPoke";
import  PokeState  from "@/app/types";

const emptyPoke: PokeState = {} as PokeState;

const typeColor: { [key: string]: string } = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};


export default function ProfilePage() {
    const router = useRouter()

    const [generated, setGenerated] = useState<boolean>(false)
    const [arrayP, setArrayP] = useState<PokeState[]>([])
    //const [arrayP, setArrayP] = useState<pokeArray>( { myArray: [] })
    const [pokemon, setPokemon] = useState<PokeState>()

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const updatePokemon = (newVals: PokeState) => {
        setPokemon(newVals)
    }
    const pushToArray = (newPoke: PokeState) => {
        setArrayP( (prevState) => [...prevState,newPoke])
    }

    const onGenerate = async () => {
        try {
            const response = await getRandomPoke();
            const p1: PokeState = {
                hp: response.data.stats[0].base_stat,
                imgSrc: response.data.sprites.other.dream_world.front_default,
                pokeName: response.data.name[0].toUpperCase() + response.data.name.slice(1),
                statAttack: response.data.stats[1].base_stat,
                statDefense: response.data.stats[2].base_stat,
                statSpeed: response.data.stats[5].base_stat,
                themeColor: typeColor[response.data.types[0].type.name],
            }
            updatePokemon(p1)
            pushToArray(p1)
        } catch (error) {
            console.log(error);
        }
    }

    const generateNPokes =async () => {
        const n = 2;
        for (let i = 0; i < n; i++) {  await onGenerate() }
        setGenerated(true)
    }

    return (
        <div className="flex flex-col items-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            
            <button
            onClick={logout}
            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Logout</button>

            <button onClick={generateNPokes} 
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generar Un Poke</button>

            {generated ?
                <Card {...arrayP[0]}/>
            :   ( <p> Aqui Irian los Pokemones </p> )}
           

        </div>
    )
}
import card from "@/app/card/card.module.css"
import { getRandomPoke } from "@/helpers/getRandomPoke";
import React, {useEffect} from "react";

export default function Card() {

    const [typeColor, setTypeColor] = React.useState({
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
                                        });


    const [hp, setHp] = React.useState("");
    const [imgSrc, setImgSrc] = React.useState("");
    const [pokeName, setPokeName] = React.useState("");
    const [statAttack, setStatAttack] = React.useState("");
    const [statDefense, setStatDefense] = React.useState("");
    const [statSpeed, setStatSpeed] = React.useState("");
    const [themeColor, setThemeColor] = React.useState("");


    const onGenerate = async () => {
        
        // Get necessary data and assign it to variables
        try {
            const data:any = await getRandomPoke();
            console.log(data);

            setHp( data.stats[0].base_stat)
            setImgSrc( data.sprites.other.dream_world.front_default)
            setPokeName( data.name[0].toUpperCase() + data.name.slice(1) )
            setStatAttack( data.stats[1].base_stat )
            setStatDefense( data.stats[2].base_stat )
            setStatSpeed( data.stats[5].base_stat)
            // Set themeColor based on pokemon type
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
            setThemeColor ( typeColor[data.types[0].type.name] )
            console.log(themeColor);
           
        } catch (error) {
            console.log(error);
        }
    }
  
    return (   
        <div className="bg-white flex flex-col h-screen justify-between">
        <button onClick={onGenerate} 
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generar Un Poke</button>
        <div className="container mt-auto">
            <div 
            className={`radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`}
            id="card">
            <p className="hp">
                    <span>HP</span>
                        {hp}
                    </p>
                    <img src={imgSrc} />
                    <h2 className="poke-name">{pokeName}</h2>
                    <div className="types">
                    
                    </div>
                    <div className="stats">
                    <div>
                        <h3>{statAttack}</h3>
                        <p>Attack</p>
                    </div>
                    <div>
                        <h3>{statDefense}</h3>
                        <p>Defense</p>
                    </div>
                    <div>
                        <h3>{statSpeed}</h3>
                        <p>Speed</p>
                    </div>
                    </div>
            </div>
        </div>
        </div> 
    )

}

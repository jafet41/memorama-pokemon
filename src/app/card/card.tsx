import  PokeState  from "@/app/types";

export default function Card({  hp,         imgSrc,         pokeName, 
                                statAttack, statDefense,    statSpeed,
                                themeColor 
                            }:PokeState) {
 
    return (           
        <div className=" container text-black ">
            <div id="card">
                
                <div className="back"
                style={{    background: 
                    `radial-gradient( circle at 50% 0%, 
                                      ${themeColor} 36%, 
                                      #ffffff 36%)`        }}
                >
                    <p className=" hp bg-white">
                    <span>HP </span>
                        {hp}
                    </p>
                    <img src={imgSrc} />
                    <h2 className=" poke-name">{pokeName}</h2>
                    <div className=" types">
                    
                    </div>
                    <div className=" stats">
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
                
                <div className="front">
                    <img src="https://seeklogo.com/images/P/pokemon-go-pokestop-logo-EC6E6CAA62-seeklogo.com.png" 
                    alt="Tapa" />
                </div>

            </div>
        </div>
    )

}

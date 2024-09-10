import { useState } from "react";
import Buttons from "./Buttons.JSx";
export default function Jokes()
{
    const [Joke, setJoke] = useState("");
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
    return(
        <>
        <div className="joke">
            <Buttons callApi={fetchApi} /> 
            <p>{Joke}</p>    
        </div>
        </>
    )
}
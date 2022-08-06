import React from "react";
import memesData from "../memesData";

export default function Meme() {
    //randomize image state
    const [allMemes, setAllMemes] = React.useState(memesData)
    
    //set final image state
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    });

    //function for getting mouse clicked on button
    function getMemeImages() {
        //capture memes data as an array
        const memesArray = allMemes.data.memes;
        // make a random number according tu memes length
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        // put a random number to index of memesArray
        const imageUrl = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: imageUrl
        }))
    }

    //function for getting text input
    function handleChange(event) {
        //destructuring the object (ES6)
        const {name, value} = event.target
        //change the value of state with something that type in input form
        setMeme(emptyValue => ({
            ...emptyValue,
            [name]: value
        }))
    }
    
    // making state (OLD syntax)
    // const [memePic, randomMeme] = React.useState('');

    // will start when click on button (OLD syntax)
    // function getMeme() {
    //     // capture memes data as an array
    //     const memesArray = memesData.data.memes;
    //     // make a random number according tu memes length
    //     const randomNumber = Math.floor(Math.random() * memesArray.length);
    //     // put a random number to index of memesArray
    //     const imageUrl = memesArray[randomNumber].url;
    //     // call a state function
    //     randomMeme(imageUrl);
    // }

    return (
        <main className="m-9">
            <div className="form">
                <div className="flex gap-6">
                    <input 
                    type="text" 
                    placeholder="Shut up" 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText} 
                    className="w-full block px-3 py-2 font-semibold placeholder-gray-400 rounded-md border"
                    />
                    <input 
                    type="text" 
                    placeholder="and take my money" 
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    className="w-full block px-3 py-2 font-semibold placeholder-gray-400 rounded-md border"
                    />
                </div>
                <button className="w-full mt-4 h-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white font-karla font-bold rounded-md" onClick={getMemeImages}>
                    Get a new meme image <span className="font-sans">🖼</span>
                </button>
            </div>
            <div className="relative">
                <img className="mt-9 w-full object-contain text-center px-8" src={meme.randomImage} />
                <h2 className="absolute w-4/5 text-center left-1/2 -translate-x-1/2 my-4 px-1 font-anton text-7xl text-white uppercase drop-shadow-outline top-0">{meme.topText}</h2>
                <h2 className="absolute w-4/5 text-center left-1/2 -translate-x-1/2 my-4 px-1 font-anton text-7xl text-white uppercase drop-shadow-outline bottom-0">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
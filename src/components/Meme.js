import React from "react";
import memesData from "../memesData";

export default function Meme() {
    //randomize image state
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    //set final image state
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    });

    //function for getting mouse clicked
    function getMemeImages() {
        //capture memes data as an array
        const memesArray = allMemeImages.data.memes;
        // make a random number according tu memes length
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        // put a random number to index of memesArray
        const imageUrl = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: imageUrl
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
                    name="first-element" 
                    className="w-full block px-3 py-2 font-semibold placeholder-gray-400 rounded-md border"
                    />
                    <input 
                    type="text" 
                    placeholder="and take my money" 
                    name="second-element" className="w-full block px-3 py-2 font-semibold placeholder-gray-400 rounded-md border"
                    />
                </div>
                <button className="w-full mt-4 h-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white font-karla font-bold rounded-md" onClick={getMemeImages}>
                    Get a new meme image <span className="font-sans">🖼</span>
                </button>
            </div>
            <img className="mt-9 w-full object-contain text-center px-8"
            src={meme.randomImage}>
            </img>
        </main>
    )
}
import memesData from "../memesData";

export default function Meme() {
    function MouseClick() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const imageUrl = memesArray[randomNumber].url;
        alert(imageUrl);
    }

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
                <button className="w-full mt-4 h-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white font-karla font-bold rounded-md" onClick={MouseClick}>
                    Get a new meme image <span className="font-sans">🖼</span>
                </button>
            </div>
            {/* <img className="mt-9">
            </img> */}
        </main>
    )
}
import React from "react"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-purple-800 to-purple-600 text-white py-6 px-9">
            <div className="flex gap-2">
                <img className="w-[31.31px] h-[26.22px]" src="./img/troll-face.png" />
                <h2 className="font-karla font-bold text-xl">Meme generator</h2>
            </div>
            <p className="font-inter text-sm">React Course - Project 3</p>
        </nav>
    )
}
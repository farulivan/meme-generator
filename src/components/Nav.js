import React from "react"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-purple-800 to-purple-600 text-white py-6 px-9">
            <div className="md:flex md:gap-2">
                <img className="w-[31.31px] h-[26.22px]" src="./img/troll-face.png" />
                <h2 className="hidden md:inline font-karla font-bold text-xl text-right">Meme generator</h2>
            </div>
            <div className="flex-col">
                <h2 className="font-karla font-bold text-md text-right md:hidden">Meme generator</h2>
                <p className="font-inter text-xs text-right md:text-sm">React Course - Project 3</p>
            </div>
        </nav>
    )
}
import { Card } from "../Elements/Card/Card"
import { Socmed } from "../Elements/Media/Socmed"
import { Navbar } from "../Elements/Navbar/Navbar"

export const Projects = () => {
    
    return(
        <div className="w-full">
            <Navbar/>
            <div className="bg-slate-200 flex gap-14  justify-center items-center min-h-screen flex-col ">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="font-semibold text-3xl">My Projects</h1>
                    <hr className="border border-black w-[200px] rounded"/>
                </div>
                <div className="flex items-center justify-center flex-wrap w-[full]  gap-10">
                    <Card image="./images/film.png" title="Movie App" tech="Tech Stack: React Js & Native Css"/>
                    <Card image="./images/chatapp.png" title="Chat Application" tech="Tech Stack: HTML, CSS Javascript PHP & Mysql"/>
                    <Card image="./images/smarthome.png" title="Web IOT For Smart Home" tech="Tech Stack: Arduino Ide, HTML, CSS Javascript PHP & Mysql"/>
                    <Card image="./images/shop.png" title="Clotheshop App" tech="Tech Stack: React Js, Tailwind Css"/>
                </div>
            <Socmed/>
            </div>
        </div>
    )
}
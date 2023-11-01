import { Button } from "../Button/Button"
import { Socmed } from "../Media/Socmed"

export const Content = () => {
    return(
        <>
        <div className="flex items-center gap-6 flex-col">
            <h1 className="font-extrabold text-5xl">Hello✌️, I'M DYLAN AVILLA </h1>
            <p className="font-sans flex flex-wrap items-center w-[680px] text-center text-neutral-700 ">
            a fresh graduate in computer technology from Telkom University who wants to become a front end developer, I am a responsible and adaptable person with a passion for technology, especially web design.</p>
            <Button/>
        </div>
            <Socmed/>
        </>
    )
}
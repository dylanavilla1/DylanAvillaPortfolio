import { Link } from "react-router-dom"
export const Socmed = () => {
    return (
        <div className="fixed left-0 flex flex-col h-[250px] justify-center items-center gap-6 shadow-md shadow-black p-4 rounded bg-slate-200">
            <Link to={"https://www.linkedin.com/in/dylan-avilla-94698428a/"}>
                <img src="./images/linkedin.png"  className="w-[27px] h-[27px]"/>
            </Link>
            <Link to={"mailto:senseilevi851@gmail.com"}>
                <img src="./images/email.png"  className="w-[27px] h-[27px]"/>
            </Link>
            <Link to={"whatsapp://send?abid=082127524908&text=Hello%2C%20Welcome"}>
                <img src="./images/whatsapp.png"  className="w-[27px] h-[27px]"/>
            </Link>
            <Link to={"https://github.com/dylan-avilla"}>
                <img src="./images/github.png"  className="w-[27px] h-[27px]"/>
            </Link>
        </div>
    )
} 
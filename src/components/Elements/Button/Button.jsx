import { Link } from "react-router-dom"
export const Button = () => {
    return(
        <>
        <Link to="/project">
            <button className="p-4 bg-sky-700 rounded w-[130px]  text-white  font-semibold  hover:bg-sky-600">See Projects</button>
        </Link>
        </>
    )
}
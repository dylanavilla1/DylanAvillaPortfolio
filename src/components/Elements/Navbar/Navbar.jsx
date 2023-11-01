import { Link } from "react-router-dom"
import { App } from "../../../App"
export const Navbar = () => {
    const toggleSwitch = (event) => {
        if(event.checked == true){
            return  <App bg="bg-black"/>
        } else {
            console.info('false')
        }
    }

    const fullImage = (e) => {
        e.preventDefault()
        return(
            document.location.href = e.target.src
        )
    }
    return (
        <>
            <nav className="flex justify-around font-sans items-center gap-6 bg-sky-700 text-white  p-6 w-full fixed top-0">
                <div className="flex items-center gap-6 justify-center">
                <img className="relative cursor-pointer inline-block h-12 bg-auto w-12 rounded-full object-cover object-center" alt="Image placeholder" src="./images/mypict.jpg" onClick={(e) => fullImage(e)}/>
                    <p className="text-2xl font-bold">Dylan Avilla</p>
                </div>
                <ul className="flex gap-6 font-semibold items-center justify-center">
                    <li>
                        <Link to={"/"}>
                            <p className="hover:text-teal-100">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <p className="hover:text-teal-100">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/project"}>
                            <p className="hover:text-teal-100">Projects</p>
                        </Link>
                    </li>
                    <li onClick={(e) =>  toggleSwitch(e.target)}>
                    <div className="inline-flex items-center">
                        <div className="relative inline-block h-3 w-8 cursor-pointer rounded-full">
                            <input
                            id="switch-component"
                            type="checkbox"
                            className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-sky-600 transition-colors duration-300 checked:bg-black peer-checked:border-white peer-checked:before:bg-white0"
                            />
                            <label
                            htmlFor="switch-component"
                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-white-500 peer-checked:before:bg-white"
                            >
                            <div
                                className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                                data-ripple-dark="true"
                            ></div>
                            </label>
                        </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}
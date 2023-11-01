import { Content } from "./components/Elements/Content/Content"
import { Navbar } from "./components/Elements/Navbar/Navbar"
export const  App = () =>  {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
        <Navbar/>
        <Content/>
    </div>
  )
}


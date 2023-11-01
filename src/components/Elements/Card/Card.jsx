import { Link} from "react-router-dom"

export const Card = ({image, title, tech}) => {
    const fullImage = (e) => {
        e.preventDefault()
        return(
            document.location.href = image
        )
    }
    return(
        <>
        <div className="flex w-[300px] h-[320px]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
    className=""
      src={image}
      alt="img-blur-shadow"
      layout="fill"
      onClick={(e)=> fullImage(e)}
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {tech}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none rounded-lg bg-sky-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-900/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
        </>
    )
}
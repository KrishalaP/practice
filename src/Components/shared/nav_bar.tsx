import Searchbar from "./searchbar"
const nav_bar = () => {
  return (
    <div className='bg-black flex' >
    <div className="flex items-center  p-3 pl-14 ">
    <img src={"https://ak-flix.vercel.app/_next/image?url=%2Fassets%2Flogo-color.png&w=64&q=75"} className="rounded-3xl w-50 h-50" alt="logo"></img>
    </div>
    <div className="text-xl font-bold tracking-wider text-white md:text-4xl pt-5 ">
                  Flix
                </div>
                <div className="ml-auto pt-5 pr-10 text-white justify-center mr-20 ">
                <Searchbar/>
                </div>
        </div>
  )
}

export default nav_bar
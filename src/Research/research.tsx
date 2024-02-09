import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"


const research = () => {
  return (
    <div className="container mx-auto px-10">
        <div className="">
            <p className="">Research Division at NIFS</p>
        </div>
        <div className="md:grid grid-cols-3 gap-8">
            <div className="pt-[-20px] mb-20">
                <Link to={'/Research/BioScience'}>
                    <img src="https://c1.wallpaperflare.com/preview/690/437/145/microscope-research-lab-laboratory.jpg" alt="" className="rounded h-56 w-full object-cover"/>
                    <p className="text-xl font-semibold mt-[-120px] ml-8 text-white">Biological Science</p>
                    <div className="flex text-yellow-300 ml-8">
                        <p className="">Explore more</p>
                        <p className="pt-[3px]"><IonIcon name="chevron-forward-outline" /></p>
                    </div>
                </Link>
            </div>
            <div className="mb-20">
                <Link to={'/Research/BioScience'}>
                    <img src="https://wallpapercave.com/wp/wp2293434.jpg" alt="" className="rounded h-56 w-full" />
                    <p className="text-xl font-semibold mt-[-120px] ml-8 text-white">Biological Science</p>
                        <div className="flex text-yellow-300 ml-8">
                        <p className="">Explore more</p>
                        <p className="pt-[3px]"><IonIcon name="chevron-forward-outline" /></p>
                    </div>
                </Link>
            </div>
            <div className="mb-20">
                <Link to={'/Research/BioScience'}>
                    <img src="https://wallpapercave.com/wp/wp13396133.png" alt="" className="rounded h-56 w-full"/>
                    <p className="text-xl font-semibold mt-[-120px] ml-8 text-white">Biological Science</p>
                        <div className="flex text-yellow-300 ml-8">
                        <p className="">Explore more</p>
                        <p className="pt-[3px]"><IonIcon name="chevron-forward-outline" /></p>
                    </div>   
                </Link>         
            </div>    
            <div className="mb-20">
                <Link to={'/Research/BioScience'}>
                    <img src="https://wallpapercave.com/wp/wp2293434.jpg" alt="" className="rounded h-56 w-full"/>
                    <p className="text-xl font-semibold mt-[-120px] ml-8 text-white">Biological Science</p>
                        <div className="flex text-yellow-300 ml-8">
                        <p className="">Explore more</p>
                        <p className="pt-[3px]"><IonIcon name="chevron-forward-outline" /></p>
                    </div> 
                </Link>  
            </div>        
            <div className="mb-20">
                <img src="https://wallpapercave.com/wp/wp12615291.jpg" alt="" className="rounded h-56 w-full"/>
                <p className="text-xl font-semibold mt-[-120px] ml-8 text-white">Biological Science</p>
                    <div className="flex text-yellow-300 ml-8">
                    <p className="">Explore more</p>
                    <p className="pt-[3px]"><IonIcon name="chevron-forward-outline" /></p>
                </div> 
            </div>
            <div className="mb-20">
                <img src="https://wallpapercave.com/wp/wp8860783.jpg" alt="" className="rounded h-56 w-full"/>
                <p className="text-xl font-semibold mt-[-120px] ml-8 text-white">Biological Science</p>
                    <div className="flex text-yellow-300 ml-8">
                    <p className="">Explore more</p>
                    <p className="pt-[3px]"><IonIcon name="chevron-forward-outline" /></p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default research
const bioSci = () => {
  return (
    <div>
        <div className="md:grid grid-cols-2">
            <div className="">
                <img src="https://c1.wallpaperflare.com/preview/690/437/145/microscope-research-lab-laboratory.jpg" alt="" className="h-auto w-full"/>
                <p className="text-3xl text-white mt-[-220px] pl-16 pb-0 font-bold">Biological Science</p>
            </div>
            <div className="bg-gray-900 w-full text-white invisible md:visible">
                <p className="text-3xl text-yellow-500 pt-40 pl-16 pb-40">Biological Science</p>
            </div>
        </div>
        <div className="container mx-auto px-10">
            <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias consequuntur vel ex magni repellendus ipsum iusto nobis sed maiores repudiandae quo quas sapiente asperiores molestiae possimus ducimus, earum assumenda!
            </div>
        </div>
    </div>
  )
}

export default bioSci
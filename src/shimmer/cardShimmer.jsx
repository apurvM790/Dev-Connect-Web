const CardShimmer = ()=>{

    return (
        <div className="flex w-full items-start justify-center min-h-screen pt-10 md:pt-20  px-4">
              <div className="w-full sm:w-[90%] md:w-[420px] lg:w-[450px] rounded-2xl shadow-2xl border border-gray-800 animate-pulse">
                <div className="w-full flex justify-center items-center">
                <div className="relative w-5/6 m-2  h-60 md:h-72 p-2 bg-slate-800 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                </div>
                
        
                <div className="p-5 ">
                  <div className="relative sm:h-5 md:h-10 md:w-40 sm:w-20 bg-gray-800 overflow-hidden rounded-lg m-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
        
                  <div className="relative w-4/6 h-4 bg-gray-800 overflow-hidden rounded-md m-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
        
                  <div className="flex justify-between text-sm md:text-base font-medium text-gray-300 mt-4">
                     <div className="relative md:h-10 sm:h-7 sm:w-10 md:w-20 bg-gray-800 overflow-hidden rounded-md m-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                     </div>
                     <div className="relative sm:h-7 sm:w-10 md:h-10 md:w-20 bg-gray-800 overflow-hidden rounded-md m-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                     </div>
                  </div>
        
        
                  <div className="mt-6 flex justify-around">
                    
                  </div>
                </div>
              </div>
            </div>
        
    )
};

export default CardShimmer;
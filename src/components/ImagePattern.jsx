import astronaut from "../images/astronot.png";

function ImagePattern ({ title, subtitle }){

    return (
        <div className="hidden lg:flex flex-col items-center justify-center bg-base-200 p-12">
            <div className="flex justify-end w-full px-6">
            <img className="w-28 h-28 animate-bounce duration-100" style={{ animationDuration: "2s"}} src={astronaut} alt="astronaut"/>
            </div>
      <div className="max-w-md text-center">
        <div className="grid grid-cols-5 gap-3 mb-8">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-gray-800 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
    )
};

export default ImagePattern;
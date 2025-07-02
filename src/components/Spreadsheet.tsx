import img1 from ".././assets/re.png";
import img2 from ".././assets/link.png";
import img3 from ".././assets/image1.png";
import img4 from ".././assets/image4.png";
import img5 from ".././assets/image5.png";
import img6 from ".././assets/image6.png";

import img9 from ".././assets/image7.png";

const DataTableSection = () => {
  return (
    <>
      <div className="flex">

        <div className="w-[32px]"></div>
        

        <div className="w-[630px] h-[32px] flex items-center bg-gray-200">
          <div className="bg-gray-50 w-[180px] rounded h-6 flex gap-1 my-1 justify-center items-center mx-[6px] px-2 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
            <img className="size-5 hover:opacity-80 transition-opacity" src={img2} alt="Link" />
            <p className="w-[130] text-gray-500 text-[13px] font-light hover:text-gray-800 transition-colors">Q3 Financial Overview</p>
          </div>
          <div className="p-1 hover:bg-gray-200 rounded cursor-pointer transition-colors">
            <img className="size-5 hover:scale-110 transition-transform" src={img1} alt="Refresh" />
          </div>
        </div>
        <div className="w-[128px]"></div>
        <div className="w-[140px] flex items-center justify-center gap-1 bg-green-200 hover:bg-green-300 transition-colors cursor-pointer group">
          <img className="size-5 group-hover:opacity-90 transition-opacity" src={img3} alt="ABC Icon" />
          <p className="text-[14px] text-gray-500 font-light group-hover:text-gray-800 transition-colors">ABC</p>
          <img className="size-5 group-hover:rotate-90 transition-transform" src={img4} alt="Dropdown" />
        </div> 
        <div className="w-[280px] flex items-center justify-center gap-1 bg-purple-200 hover:bg-purple-300 transition-colors cursor-pointer group">
          <img className="size-5 group-hover:opacity-90 transition-opacity" src={img5} alt="Question Icon" />
          <p className="text-[14px] text-gray-500 font-light group-hover:text-gray-800 transition-colors">Answer a question</p>
          <img className="size-5 group-hover:rotate-90 transition-transform" src={img6} alt="Dropdown" />
        </div>
        <div className="w-[140px] flex items-center justify-center gap-1 bg-orange-200 hover:bg-orange-200 transition-colors cursor-pointer group">
          <img className="size-5 group-hover:opacity-90 transition-opacity" src={img5} alt="Extract Icon" />
          <p className="text-[14px] text-gray-500 font-light group-hover:text-gray-800 transition-colors">Extract</p>
          <img className="size-5 group-hover:rotate-90 transition-transform" src={img4} alt="Dropdown" />
        </div> 
        <div className="w-[140px] flex items-center justify-center gap-1 bg-gray-200 hover:bg-gray-200 transition-colors cursor-pointer">
          <img className="size-4 hover:scale-125 transition-transform" src={img9} alt="Add" />
        </div> 
        <div className="w-5 bg-gray-100"></div>
      </div>
    </>
  )
}

export default DataTableSection;
import img1 from ".././assets/first.png";
import img2 from ".././assets/job.png";
import img3 from ".././assets/down.png";
import img4 from ".././assets/downcircle.png";
import img5 from ".././assets/submit.png";
import img6 from ".././assets/url.png";
import img7 from ".././assets/calender.png";
import img8 from ".././assets/assigned.png";

const Spreadheetgoogle = () => {
  return (
    <div className="">
      <div className="flex border-t border-l border-gray-50">
   
        <div className="bg-gray-100 h-[32px] w-[32px] flex justify-center items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200">
            <img className="size-4 hover:opacity-80" src={img1} alt="Number" />
        </div>

   
        <div className="bg-gray-100 h-[32px] w-[248px] px-2 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img2} alt="Job" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Job Request</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>


        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img7} alt="Calendar" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Submitted</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>

   
        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img4} alt="Status" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Status</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>


        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img5} alt="Submitter" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Submitter</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>

     
        <div className="bg-gray-100 h-[32px] w-[128px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img6} alt="URL" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">URL</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>


        <div className="bg-green-100 h-[32px] w-[140.5px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-green-200 transition-colors duration-200 group">
            <div className="flex gap-2 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img8} alt="Assigned" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Assigned</p>
            </div>
        </div>

  
        <div className="bg-purple-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-purple-200 transition-colors duration-200">
            <div className="px-3">
                <p className="text-gray-500 text-[12px] font-bold hover:text-gray-700">Priority</p>
            </div>
        </div>


        <div className="bg-purple-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-purple-200 transition-colors duration-200">
            <div className="px-3">
                <p className="text-gray-500 text-[12px] font-bold hover:text-gray-700">Due Date</p>
            </div>
        </div>


        <div className="bg-orange-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-orange-200 transition-colors duration-200">
            <div className="px-3">
                <p className="text-gray-500 text-[12px] font-bold hover:text-gray-700">Est. Value</p>
            </div>
        </div>


        <div className="bg-red-100 w-[140px] border-b border-r border-gray-50 hover:bg-red-200 transition-colors duration-200"></div>
      </div>
      <div className="flex border-t border-l border-gray-50">
   
        <div className="bg-gray-100 h-[32px] w-[32px] flex justify-center items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200">
            <img className="size-4 hover:opacity-80" src={img1} alt="Number" />
        </div>

   
        <div className="bg-gray-100 h-[32px] w-[248px] px-2 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img2} alt="Job" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Job Request</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>


        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img7} alt="Calendar" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Submitted</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>

   
        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img4} alt="Status" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Status</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>


        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img5} alt="Submitter" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Submitter</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>

     
        <div className="bg-gray-100 h-[32px] w-[128px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
            <div className="flex gap-1 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img6} alt="URL" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">URL</p>
            </div>
            <div className="p-1 hover:bg-gray-300 rounded">
                <img className="size-4 hover:rotate-180 transition-transform" src={img3} alt="Dropdown" />
            </div>
        </div>


        <div className="bg-green-100 h-[32px] w-[140.5px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-green-200 transition-colors duration-200 group">
            <div className="flex gap-2 items-center">
                <img className="size-4 group-hover:scale-110 transition-transform" src={img8} alt="Assigned" />
                <p className="text-gray-500 text-[12px] font-bold group-hover:text-gray-700">Assigned</p>
            </div>
        </div>

  
        <div className="bg-purple-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-purple-200 transition-colors duration-200">
            <div className="px-3">
                <p className="text-gray-500 text-[12px] font-bold hover:text-gray-700">Priority</p>
            </div>
        </div>


        <div className="bg-purple-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-purple-200 transition-colors duration-200">
            <div className="px-3">
                <p className="text-gray-500 text-[12px] font-bold hover:text-gray-700">Due Date</p>
            </div>
        </div>


        <div className="bg-orange-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-orange-200 transition-colors duration-200">
            <div className="px-3">
                <p className="text-gray-500 text-[12px] font-bold hover:text-gray-700">Est. Value</p>
            </div>
        </div>


        <div className="bg-red-100 w-[140px] border-b border-r border-gray-50 hover:bg-red-200 transition-colors duration-200"></div>
      </div>
    </div>
  )
}

export default Spreadheetgoogle;

import img8 from ".././assets/plus.png";
const Footer = () => {
  return (
    <>
    <div className="w-full items-center  absolute mb-2 gap-2 flex border-t-gray-100 mt-1">
        <div className=" h- w-[32px]"></div>
        <div className="bg-green-100 border-t border-green-600  p-3">All Orders</div>
        <div className="m-1 p-2 text-gray-500">Pending</div>
        <div className="m-1 p-2 text-gray-500">Reviewed</div>
         <div className="m-1 p-2 text-gray-500">Arrived</div>
         <div className="flex align"><img className="size-5" src={img8} alt="" /></div>



    </div>
    
    
    </>
  )
}

export default Footer
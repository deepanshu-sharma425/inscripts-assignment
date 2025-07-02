import img8 from ".././assets/plus.png";

const Footer = () => {
  return (
    <>
      <div className="w-full items-center absolute bottom-0 gap-2 flex border-t border-gray-100 bg-white p-2">
        <div className="w-[32px]"></div>

        <div className="bg-green-100 border-t border-green-600 p-3 hover:bg-green-200 cursor-pointer rounded">
          All Orders
        </div>

        <div className="m-1 p-2 text-gray-500 hover:text-black hover:bg-gray-100 cursor-pointer rounded">
          Pending
        </div>

        <div className="m-1 p-2 text-gray-500 hover:text-black hover:bg-gray-100 cursor-pointer rounded">
          Reviewed
        </div>

        <div className="m-1 p-2 text-gray-500 hover:text-black hover:bg-gray-100 cursor-pointer rounded">
          Arrived
        </div>

        <div className="flex items-center justify-center hover:bg-gray-100 p-2 rounded cursor-pointer">
          <img className="size-5" src={img8} alt="Add" />
        </div>
      </div>
    </>
  );
};

export default Footer;

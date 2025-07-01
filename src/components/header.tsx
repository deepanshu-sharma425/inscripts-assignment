import React from 'react';
import img1 from '.././assets/partitionview.png';
import img2 from '.././assets/arrow.png';
import img3 from '.././assets/dot3.png';
import img4 from '.././assets/image.png';
import img5 from '.././assets/user.png';
import img6 from '.././assets/bell.png';
import img7 from '.././assets/number.png';

const Navbar: React.FC = () => {
  return (
    <div className="h-[52px] px-[16px] py-[8px] flex justify-between border-b border-gray-200">
      {/* Left Side */}
      <div className="flex gap-[16px] justify-center items-center">
        <div className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
          <img className="w-[19px] h-[15px]" src={img1} alt="Logo Icon" />
        </div>

        <div className="flex gap-[6px]">
          {/* Workspace */}
          <div className="flex text-gray-600 hover:text-gray-900 gap-[8px] justify-center items-center group cursor-pointer">
            <p className="text-[14px] group-hover:underline">Workspace</p>
            <img className="h-3 w-2 transition-transform group-hover:translate-x-0.5" src={img2} alt="Arrow" />
          </div>

          {/* Folder 2 */}
          <div className="flex gap-[8px] text-gray-600 hover:text-gray-900 justify-center items-center group cursor-pointer">
            <p className="text-[14px] group-hover:underline">Folder 2</p>
            <img className="h-3 w-2 transition-transform group-hover:translate-x-0.5" src={img2} alt="Arrow" />
          </div>

          {/* Spreadsheet 3 */}
          <div className="flex gap-[8px] justify-center items-center group cursor-pointer">
            <p className="text-[14px] text-gray-900 group-hover:underline">Spreadsheet 3</p>
            <div className="p-1 hover:bg-gray-100 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <img className="h-1 w-[14px]" src={img3} alt="More Options" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex gap-3 justify-center items-center">
        {/* Search */}
        <div className="flex mt-1 items-center gap-2 w-[185px] h-10 bg-gray-100 hover:bg-gray-200 pl-3 pr-2 rounded-md transition-colors duration-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500">
          <img className="size-4 opacity-60" src={img4} alt="Search Icon" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="flex-1 h-8 bg-transparent text-sm font-light placeholder-gray-500 outline-none focus:ring-0"
          />
        </div>

        {/* Notification */}
        <div className="relative inline-block p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors duration-200">
          <img className="size-[20px]" src={img6} alt="Notification Bell" />
          <img
            src={img7}
            alt="Notification Count"
            className="absolute bottom-[16px] left-4 size-[14px] hover:scale-110 transition-transform"
          />
        </div>

        {/* Profile */}
        <div className="flex gap-[8px] justify-center items-center p-1 pr-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors duration-200">
          <img src={img5} className="size-10 hover:opacity-90 transition-opacity" alt="User Profile" />
          <div>
            <p className="text-[14px] font-medium hover:underline">John Doe</p>
            <p className="text-[12px] text-gray-500 hover:text-gray-700 transition-colors">John.doe...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

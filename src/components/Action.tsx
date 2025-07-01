import React from "react";
import { ChevronsRight } from "lucide-react";

// Image imports
import img9 from ".././assets/filter.png";
import img10 from ".././assets/eyeclosed.png";
import img11 from ".././assets/cell.png";
import img12 from ".././assets/shareim.png";
import img1 from ".././assets/download.png";
import img2 from ".././assets/upload.png";
import img3 from ".././assets/sort.png";
import img4 from ".././assets/newac.png";

// ✅ Updated type to React.ReactNode to avoid JSX.Element error
interface ActionItem {
  icon: React.ReactNode;
  label: string;
}

const Actionn: React.FC = () => {
  const toolbarActions: ActionItem[] = [
    { icon: <img src={img10} className="w-5 h-5" alt="Hide" />, label: "Hide fields" },
    { icon: <img src={img3} className="w-5 h-5" alt="Sort" />, label: "Sort" },
    { icon: <img src={img9} className="w-5 h-5" alt="Filter" />, label: "Filter" },
    { icon: <img src={img11} className="w-5 h-5" alt="Cell view" />, label: "Cell view" },
  ];

  const rightActions: ActionItem[] = [
    { icon: <img src={img1} className="w-5 h-5" alt="Import" />, label: "Import" },
    { icon: <img src={img2} className="w-5 h-5" alt="Export" />, label: "Export" },
    { icon: <img src={img12} className="w-5 h-5" alt="Share" />, label: "Share" },
  ];

  return (
    <div className="flex items-center gap-2 px-2 py-2 w-full bg-white border-b border-gray-200">
      {/* Toolbar Toggle Button */}
      <button
        className="flex items-center gap-1 p-2 rounded hover:bg-gray-100 transition-colors duration-200 group"
        onMouseEnter={(e) => e.currentTarget.classList.add("bg-gray-100", "shadow-sm")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("bg-gray-100", "shadow-sm")}
      >
        <span className="text-sm font-light text-black group-hover:text-gray-700">Tool bar</span>
        <ChevronsRight className="font-light w-[16px] h-[16px] group-hover:translate-x-0.5 transition-transform" />
      </button>

      <div className="h-6 w-px bg-gray-200" />

      {/* Toolbar Actions */}
      <div className="flex font-light gap-1 flex-1">
        {toolbarActions.map((action, index) => (
          <button
            key={index}
            className="flex items-center gap-1 pl-2 pr-3 py-2 rounded transition-all duration-200 relative overflow-hidden hover:bg-gray-50 hover:shadow-inner"
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.classList.add("scale-110");
              e.currentTarget.classList.add(
                "before:absolute",
                "before:inset-0",
                "before:bg-gray-100",
                "before:opacity-30"
              );
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.classList.remove("scale-110");
              e.currentTarget.classList.remove(
                "before:absolute",
                "before:inset-0",
                "before:bg-gray-100",
                "before:opacity-30"
              );
            }}
          >
            <div className="transition-transform duration-200">{action.icon}</div>
            <span className="text-sm text-black hover:text-gray-700">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="flex font-extralight items-center gap-2">
        {rightActions.map((action, index) => (
          <button
            key={index}
            className="flex items-center gap-1 pl-2 pr-3 py-2 border border-gray-200 rounded hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.classList.add("opacity-100");
              e.currentTarget.classList.add("bg-gray-50");
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) img.classList.remove("opacity-100");
              e.currentTarget.classList.remove("bg-gray-50");
            }}
          >
            <div className="opacity-80 group-hover:opacity-100 transition-opacity">
              {action.icon}
            </div>
            <span className="text-sm text-gray-600 group-hover:text-gray-800">{action.label}</span>
          </button>
        ))}

        {/* New Action Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          onMouseEnter={(e) => e.currentTarget.classList.add("shadow-lg")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("shadow-lg")}
        >
          <img src={img4} className="w-5 h-5 hover:rotate-12 transition-transform" alt="New Action" />
          <span className="text-sm font-light">New Action</span>
        </button>
      </div>
    </div>
  );
};

export default Actionn;

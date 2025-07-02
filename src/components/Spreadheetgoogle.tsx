import img1 from ".././assets/first.png";
import img2 from ".././assets/job.png";
import img3 from ".././assets/down.png";
import img4 from ".././assets/downcircle.png";
import img5 from ".././assets/submit.png";
import img6 from ".././assets/url.png";
import img7 from ".././assets/calender.png";
import img8 from ".././assets/assigned.png";

import { useState } from "react";

const Spreadheetgoogle = () => {
  
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "in-process":
        return "bg-yellow-100 text-yellow-800"; 
      case "blocked":
        return "bg-red-100 text-red-800"; 
      case "need to start":
        return "bg-gray-100 text-gray-800"; 
      case "complete":
        return "bg-green-100 text-green-800"; 
      default:
        return "";
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-600"; 
      case "medium":
        return "text-yellow-600"; 
      case "low":
        return "text-blue-600"; 
      default:
        return "";
    }
  };

  const initialData = [
    {
      id: 1,
      jobRequest: "Launch social media campaign for pro ...",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel...",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: `6,200,000`,
      logo: '₹'
    },
    {
      id: 2,
      jobRequest: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhanp...",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      estValue: "3,500,000",logo:'₹'
    },
    {
      id: 3,
      jobRequest: "Finalize user testing feedback for app...",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohns...",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: "4,750,000",logo:'₹'
    },
    {
      id: 4,
      jobRequest: "Design new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreen...",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: "5,900,000",logo:'₹'
    },
    {
      id: 5,
      jobRequest: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicabro...",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "30-01-2025",
      estValue: "2,800,000",logo:'₹'
    },
  
    ...Array(0).fill({
      id: 0,
      jobRequest: "Launch social media campaign for pro ...",
      submitted: "15-11-2024",
      status: "15-11-2024",
      submitter: "15-11-2024",
      url: "15-11-2024",
      assigned: "15-11-2024",
      priority: "15-11-2024",
      dueDate: "15-11-2024",
      estValue: "15-11-2024"
    })
  ].map((item, index) => ({ ...item, id: index + 1 }));

  const [inputRows, setInputRows] = useState(
    Array(20).fill({
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: ""
    })
  );

  const [focusedInput, setFocusedInput] = useState<{rowIndex: number | null, field: string | null}>({
    rowIndex: null,
    field: null
  });

  const handleInputChange = (
    rowIndex: number,
    field: string,
    value: string
  ) => {
    const newInputRows = [...inputRows];
    newInputRows[rowIndex] = {
      ...newInputRows[rowIndex],
      [field]: value
    };
    setInputRows(newInputRows);
  };

  const handleInputFocus = (rowIndex: number, field: string) => {
    setFocusedInput({ rowIndex, field });
  };

  const handleInputBlur = () => {
    setFocusedInput({ rowIndex: null, field: null });
  };

  const isInputFocused = (rowIndex: number, field: string) => {
    return focusedInput.rowIndex === rowIndex && focusedInput.field === field;
  };

  return (
    <div className="flex  flex-col ">
      {/* Header row */}
      <div className="flex border-t border-l border-gray-50">
        <div className="bg-gray-100 h-[32px] w-[32px] flex justify-center items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200">
          <img className="size-4 hover:opacity-80" src={img1} alt="Number" />
        </div>

        <div className="bg-gray-100 h-[32px] w-[248px] px-2 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
          <div className="flex gap-1 items-center">
            <img
              className="size-4 group-hover:scale-110 transition-transform"
              src={img2}
              alt="Job"
            />
            <p className="text-gray-500 text-[12px] font-light  group-hover:text-gray-700">
              Job Request
            </p>
          </div>
          <div className="p-1 hover:bg-gray-300 rounded">
            <img
              className="size-4 hover:rotate-180 transition-transform"
              src={img3}
              alt="Dropdown"
            />
          </div>
        </div>

        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
          <div className="flex gap-1 items-center">
            <img
              className="size-4 group-hover:scale-110 transition-transform"
              src={img7}
              alt="Calendar"
            />
            <p className="text-gray-500 text-[12px] font-light  group-hover:text-gray-700">
              Submitted
            </p>
          </div>
          <div className="p-1 hover:bg-gray-300 rounded">
            <img
              className="size-4 hover:rotate-180 transition-transform"
              src={img3}
              alt="Dropdown"
            />
          </div>
        </div>

        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
          <div className="flex gap-1 items-center">
            <img
              className="size-4 group-hover:scale-110 transition-transform"
              src={img4}
              alt="Status"
            />
            <p className="text-gray-500 text-[12px] font-light  group-hover:text-gray-700">
              Status
            </p>
          </div>
          <div className="p-1 hover:bg-gray-300 rounded">
            <img
              className="size-4 hover:rotate-180 transition-transform"
              src={img3}
              alt="Dropdown"
            />
          </div>
        </div>

        <div className="bg-gray-100 h-[32px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
          <div className="flex gap-1 items-center">
            <img
              className="size-4 group-hover:scale-110 transition-transform"
              src={img5}
              alt="Submitter"
            />
            <p className="text-gray-500 text-[12px] font-light  group-hover:text-gray-700">
              Submitter
            </p>
          </div>
          <div className="p-1 hover:bg-gray-300 rounded">
            <img
              className="size-4 hover:rotate-180 transition-transform"
              src={img3}
              alt="Dropdown"
            />
          </div>
        </div>

        <div className="bg-gray-100 h-[32px] w-[128px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200 group">
          <div className="flex gap-1 items-center">
            <img
              className="size-4 group-hover:scale-110 transition-transform"
              src={img6}
              alt="URL"
            />
            <p className="text-gray-500 text-[12px] font-light  group-hover:text-gray-700">
              URL
            </p>
          </div>
          <div className="p-1 hover:bg-gray-300 rounded">
            <img
              className="size-4 hover:rotate-180 transition-transform"
              src={img3}
              alt="Dropdown"
            />
          </div>
        </div>

        <div className="bg-green-100 h-[32px] w-[140.5px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-green-200 transition-colors duration-200 group">
          <div className="flex gap-2 items-center">
            <img
              className="size-4 group-hover:scale-110 transition-transform"
              src={img8}
              alt="Assigned"
            />
            <p className="text-gray-500 text-[12px] font-light  group-hover:text-gray-700">
              Assigned
            </p>
          </div>
        </div>

        <div className="bg-purple-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-purple-200 transition-colors duration-200">
          <div className="px-3">
            <p className="text-gray-500 text-[12px] font-light  hover:text-gray-700">
              Priority
            </p>
          </div>
        </div>

        <div className="bg-purple-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-purple-200 transition-colors duration-200">
          <div className="px-3">
            <p className="text-gray-500 text-[12px] font-light  hover:text-gray-700">
              Due Date
            </p>
          </div>
        </div>

        <div className="bg-orange-100 h-[32px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 hover:bg-orange-200 transition-colors duration-200">
          <div className="px-3">
            <p className="text-gray-500 text-[12px] font-light  hover:text-gray-700">
              Est. Value
            </p>
          </div>
        </div>

        <div className="w-[140px] border-b border-r border-gray-50 hover:bg-red-200 transition-colors duration-200"></div>
      </div>

      {initialData.map((row, index) => (
        <div key={`data-${index}`} className="flex border-t border-l border-gray-50">
          <div className="h-[25px] w-[32px] flex justify-center items-center border-b border-r border-gray-50 ">
            <p className="text-[12px] font-light">{row.id}</p>
          </div>

          <div className="h-[25px] w-[248px] px-2 flex justify-between items-center border-b border-r border-gray-50 ">
            <p className="text-[12px] font-light">{row.jobRequest}</p>
          </div>

          <div className="h-[25px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50">
            <p className="text-[12px] font-light">{row.submitted}</p>
          </div>

          <div className={`h-[25px] w-[127px] px-1 flex justify-between items-center border-b border-r  border-gray-50 `}>
            <p className={`text-[12px] rounded-xl px-[8px] ml-4 font-light ${getStatusStyle(row.status)}`}>{row.status}</p>
          </div>

          <div className="h-[25px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 ">
            <p className="text-[12px] font-light">{row.submitter}</p>
          </div>

          <div className="h-[25px] w-[128px] px-1 flex justify-between items-center border-b border-r border-gray-50 ">
            <p className="text-[12px] font-light">{row.url}</p>
          </div>

          <div className="h-[25px] w-[140.5px] px-1 flex justify-between items-center border-b border-r border-gray-50 ">
            <p className="text-[12px] font-light">{row.assigned}</p>
          </div>

          <div className="h-[25px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 ">
            <p className={`text-[12px] pl-8 font-light ${getPriorityStyle(row.priority)}`}>
              {row.priority}
            </p>
          </div>

          <div className="h-[25px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 ">
            <p className="text-[12px] font-light">{row.dueDate}</p>
          </div>

          <div className="h-[25px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 ">
            <p className="pl-11 text-[12px] font-light">{row.estValue}</p>
            <p className="text-gray-700">{row.logo}</p>
          </div>

          <div className="h-[25px] w-[140px] border-b border-r border-gray-50 "></div>
        </div>
      ))}

      {inputRows.map((row, index) => (
        <div key={`input-${index}`} className="flex border-t border-l border-gray-50">
          <div className="h-[25px] w-[32px] flex justify-center items-center border-b border-r border-gray-50 hover:bg-gray-200 transition-colors duration-200">
            <p className="text-[12px] font-light">{initialData.length + index + 1}</p>
          </div>

          <div className={`h-[25px] w-[248px] px-2 flex justify-between items-center border-b border-r border-gray-50 ${
            isInputFocused(index, "jobRequest") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              value={row.jobRequest}
              onChange={(e) => handleInputChange(index, "jobRequest", e.target.value)}
              onFocus={() => handleInputFocus(index, "jobRequest")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 ${
            isInputFocused(index, "submitted") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              value={row.submitted}
              onChange={(e) => handleInputChange(index, "submitted", e.target.value)}
              onFocus={() => handleInputFocus(index, "submitted")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 ${
            row.status ? getStatusStyle(row.status) : ''
          } ${isInputFocused(index, "status") ? "border-l-2 border-l-green-500" : ""}`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              value={row.status}
              onChange={(e) => handleInputChange(index, "status", e.target.value)}
              onFocus={() => handleInputFocus(index, "status")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[127px] px-1 flex justify-between items-center border-b border-r border-gray-50 ${
            isInputFocused(index, "submitter") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              value={row.submitter}
              onChange={(e) => handleInputChange(index, "submitter", e.target.value)}
              onFocus={() => handleInputFocus(index, "submitter")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[128px] px-1 flex justify-between items-center border-b border-r border-gray-50 ${
            isInputFocused(index, "url") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              value={row.url}
              onChange={(e) => handleInputChange(index, "url", e.target.value)}
              onFocus={() => handleInputFocus(index, "url")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[140.5px] px-1 flex justify-between items-center border-b border-r border-gray-50 ${
            isInputFocused(index, "assigned") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              value={row.assigned}
              onChange={(e) => handleInputChange(index, "assigned", e.target.value)}
              onFocus={() => handleInputFocus(index, "assigned")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 ${
            isInputFocused(index, "priority") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className={`text-[12px] font-light w-full bg-transparent outline-none ${
                row.priority ? getPriorityStyle(row.priority) : ''
              }`}
              value={row.priority}
              onChange={(e) => handleInputChange(index, "priority", e.target.value)}
              onFocus={() => handleInputFocus(index, "priority")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 ${
            isInputFocused(index, "dueDate") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              value={row.dueDate}
              onChange={(e) => handleInputChange(index, "dueDate", e.target.value)}
              onFocus={() => handleInputFocus(index, "dueDate")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[140px] px-1 flex justify-between items-center border-b border-r border-gray-50 ${
            isInputFocused(index, "estValue") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              value={row.estValue}
              onChange={(e) => handleInputChange(index, "estValue", e.target.value)}
              onFocus={() => handleInputFocus(index, "estValue")}
              onBlur={handleInputBlur}
            />
          </div>

          <div className={`h-[25px] w-[140px] border-b border-r border-gray-50 ${
            isInputFocused(index, "empty") ? "border-l-2 border-l-green-500" : ""
          }`}>
            <input
              type="text"
              className="text-[12px] font-light w-full bg-transparent outline-none"
              onFocus={() => handleInputFocus(index, "empty")}
              onBlur={handleInputBlur}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spreadheetgoogle;
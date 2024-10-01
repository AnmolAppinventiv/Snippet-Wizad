import { useApp } from "@/context";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export default function AddNewTag() {
  const { showNewTagMenu, addTags, tags } = useApp();
  const [tagName, setTagName] = useState("");

  const handleSubmit = () => {
    if (tagName.trim()) {
      addTags({ name: tagName, snippetsCount: 0 });
      showNewTagMenu();
      setTagName("");
    }
  };

  return (
    <>
      <div>
        <div className="fixed top-0 right-0 left-0 bg-black w-screen h-screen  opacity-10 "></div>
        <div className="fixed z-22 left-0 right-0 bg-white mr-auto top-44 w-1/4 h-1/4   ml-auto  bg- rounded-2xl">
          <div className="flex justify-between p-2  rounded-2xl ">
            <h1 className="text-2xl">Add New Tag</h1>
            <button onClick={showNewTagMenu}>
              <CloseIcon />
            </button>
          </div>

          <div className="py-8 px-2">
            <p className="text-base text-slate-700">Tag Name</p>
            <input
              type="text"
              placeholder="For Example, Login Form"
              className="outline-none border-4 focus:shadow-2xl focus:outline-none"
              onChange={(e) => setTagName(e.target.value)}
            />
          </div>

          <div className="flex  gap-4 justify-around">
            <button
              onClick={showNewTagMenu}
              className="p-3 border-3 w-1/2 rounded-xl border-dashboard"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-mainCol w-1/2 rounded-2xl mr-4 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

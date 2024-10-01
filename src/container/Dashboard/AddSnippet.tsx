import TitleIcon from "@mui/icons-material/Title";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CloseIcon from "@mui/icons-material/Close"; 
import { useState } from "react";
import Select from "react-select";
import { useApp } from "@/context";

const AddSnippet = ({ closeForm }: { closeForm: () => void }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");

  const [isFavourite,setFavourite]= useState(false)

  const { languageOptions, isLightThemeActive, addSnippet } = useApp();

  const handleClose = () => {
    if (title && description && language && code) {
      addSnippet({ title, description, language, code }); 
    }
    closeForm();
  };

  return (
    <>  
      <div
        className={`p-6 ${
          isLightThemeActive() ? "bg-white" : "bg-slate-700"
        } rounded-lg shadow-2xl h-5/6 w-full `}
      >
        <div className="flex justify-between mb-4">
          <h3 className={`text-2xl font-bold ${isLightThemeActive()? "" : "text-white"}`}>Add New Snippet</h3>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>

        
        <div className="mb-4 flex items-center pb-14">
          <TitleIcon className="mr-2 text-mainCol" />
          <input
            type="text"
            placeholder="New Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border-2 rounded-md outline-none ${
              isLightThemeActive() ? "" : "bg-slate-700 text-white"
            }`}
          />
        </div>

        <div className="mb-4 flex items-center pb-14">
          <DataObjectOutlinedIcon className="mr-2 text-mainCol" />
          <textarea
            placeholder="New Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${
              isLightThemeActive() ? "" : "border-white text-white bg-slate-700"
            } w-full p-2 h-20 border-2 rounded-md outline-none `}
          ></textarea>
        </div>

        <div>
          <div className="flex items-center mb-2 pb-14">
            <TravelExploreIcon className="mr-2 text-mainCol"/>
            <Select
              options={languageOptions}
              value={languageOptions.find(
                (option) => option.value === language
              )}
              onChange={(option) => setLanguage(option?.value || "")}
              className="w-full"
              isSearchable
            />
          </div>
        </div>

        <section className="mb-4 flex items-start pb-24">
          <DescriptionOutlinedIcon className="mr-2 text-mainCol" />
          <textarea
            placeholder="Add your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`${
              isLightThemeActive() ? "" : "bg-slate-700 border-white text-white"
            } w-full p-2 h-40 border-2 border-gray-300 rounded-md outline-none`}
          ></textarea>
        </section>
      </div>
    </>
  );
};

export default AddSnippet;

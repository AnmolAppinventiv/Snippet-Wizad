import StyleIcon from "@mui/icons-material/Style";
import SearchIcon from "@mui/icons-material/Search";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { useApp } from "@/context";
import AddNewTag from "./AddNewTag";
import { useState } from "react";

function Tags() {
  const {
    tagsToggle,
    showNewTagMenu,
    newTagMenu,
    tags,
    deleteTag,
    startEditingTag,
    updateTag,
    cancelEditing,
    editingTagIndex,
    isLightThemeActive
  } = useApp();
  const [newTagName, setNewTagName] = useState<string>("");
  const [searchTags, setSearchTags] = useState<string>("");


  const filteredTags = tags.filter(tag =>
    tag.name.toLowerCase().includes(searchTags.toLowerCase())
  );

  return (
    <>
      <div className="fixed top-0 right-0 left-0 bg-black w-screen h-screen opacity-20"></div>
      <div className={` ${isLightThemeActive()? 'bg-white': 'bg-slate-500'} fixed left-0 right-0 mr-auto top-36 w-3/4 h-3/4  rounded-2xl ml-auto`}>
        <section className={`flex justify-between text-4xl p-8 ${isLightThemeActive()? '': 'text-white'}`}>
          <div>
            <StyleIcon />
            Tags
          </div>
          <button  onClick={tagsToggle}>
            <CloseIcon />
          </button>
        </section>

        <section className="flex flex-row space-x-8 w-full p-2">
          <div className="flex items-center gap-4 justify-between w-full">
            <SearchIcon className={`text-3xl ${isLightThemeActive()? '':'text-white'}`} />
            <input
              type="text"
              placeholder="Search"
              value={searchTags}
              onChange={(e) => setSearchTags(e.target.value)}
              className="outline-none rounded-xl bg-slate-300 w-full text-mainCol text-xl py-2 px-4 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            className="bg-mainCol p-2 text-nowrap rounded-xl text-white"
            onClick={showNewTagMenu}
          >
            + ADD TAGS
          </button>
        </section>

        {filteredTags.length > 0 ? (
          filteredTags.map((tag, index) => (
            <div
              key={index}
              className={`flex justify-between items-center m-2 shadow-lg rounded-lg p-4 w-full max-w-2xl mx-auto ${isLightThemeActive()? '':'bg-slate-400'}`}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <DragIndicatorIcon />
                  <ScatterPlotIcon className="text-mainCol" />
                </div>

                {editingTagIndex === index ? (
                  <input
                    type="text"
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    className="text-lg font-semibold border p-1 rounded"
                  />
                ) : (
                  <div>
                    <h3 className="text-lg font-semibold">{tag.name}</h3>
                    <p className="text-sm text-gray-500">
                      {tag.snippetsCount} Snippets
                    </p>
                  </div>
                )}
              </div>

              <div className="flex space-x-3">
                {editingTagIndex === index ? (
                  <>
                    <button
                      onClick={() => updateTag(index, newTagName)}
                      className="p-3 rounded-full hover:bg-mainCol hover:text-white"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="p-2 rounded-full hover:bg-slate-200 hover:text-mainCol"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setNewTagName(tag.name);
                        startEditingTag(index);
                      }}
                      className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
                    >
                      <EditIcon className="text-gray-500" />
                    </button>
                    <button
                      onClick={() => deleteTag(index)}
                      className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
                    >
                      <DeleteIcon className="text-gray-500" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">No Tags Available</p>
        )}
      </div>

      {newTagMenu && <AddNewTag />}
    </>
  );
}

export default Tags;

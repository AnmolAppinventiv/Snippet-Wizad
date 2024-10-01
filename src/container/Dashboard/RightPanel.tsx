import AddNewTag from "./AddNewTag";
import AddSnippet from "./AddSnippet";
import Data from "./RIghtHeader";
import { useApp } from "@/context";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Right() {
  const {
    toggleForm,
    showForm,
    snippets,
    deleteSnippet,
    showNewTagMenu,
    newTagMenu,
  } = useApp();
  return (
    <>
      <header className="w-full">
        <Data />
        <div
          className={`flex ${
            showForm || snippets.length > 0
              ? "justify-between"
              : "justify-center"
          }`}
        >
          {!snippets.length && (
            <div
              className={`${
                showForm ? "w-1/2" : "w-full"
              } flex flex-col justify-center items-center pt-32 pb-32`}
            >
              <img src="/no-items-found.png" alt="No Items In Cart" />
              <button
                onClick={toggleForm}
                className="bg-mainCol text-white text-base py-2  px-5  rounded-xl  "
              >
                + Add New Snippet
              </button>
            </div>
          )}

          {showForm && (
            <section className="w-1/2 flex justify-center mt-6">
              <AddSnippet closeForm={toggleForm} />
            </section>
          )}

          {snippets.length > 0 && (
            <div className="w-full px-4 gap-4">
              {snippets.map((snippet, index: number) => (
                <section
                  key={index}
                  className="mb-4 w-1/4  h-11/12 p-2  bg-white rounded-2xl"
                >
                  <h3 className=" flex justify-between py-4 ">
                    <p className="font-bold hover:text-mainCol">
                      {snippet.title.charAt(0).toUpperCase() +
                        snippet.title.slice(1)}
                    </p>{" "}
                    <button>
                      <FavoriteIcon />
                    </button>
                  </h3>
                  <p className="py-1">{snippet.description}</p>
                  <pre className="bg-zinc-100 text-[#1a1a1a] py-2 w-full">
                    <code>{snippet.code}</code>
                  </pre>
                  <section className="flex justify-between py-2 ">
                    <p className="fond-bold font-mono">{snippet.language.charAt(0).toUpperCase()+ snippet.language.slice(1)}</p>
                    <button
                      onClick={() => deleteSnippet(index)}
                      className="text-slate-700"
                    >
                      <DeleteIcon />
                    </button>
                  </section>
                </section>
              ))}
            </div>
          )}
        </div>
        {newTagMenu && <AddNewTag />}
      </header>
    </>
  );
}

export default Right;

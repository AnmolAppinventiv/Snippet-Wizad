"use client";
import SearchIcon from "@mui/icons-material/Search";
import { useUser } from "@clerk/nextjs";
import { useApp } from "@/context";

export default function Data() {
  const { user } = useUser();
  const email = user?.emailAddresses[0].emailAddress;
  const imageSrc = user?.imageUrl;
  const FullName = user?.fullName;
  const {
    themeSwitch,
    setterTheme,
    isLightThemeActive,
    toggleForm,
    showNewTagMenu,
    tags,
  } = useApp();

  return (
    <>
      <div
        className={`flex gap-32 justify-between  rounded-2xl pt-4 ${
          isLightThemeActive() ? "bg-white" : "bg-slate-700 border-2 "
        }  p-2 m-3`}
      >
        <span className="text-greyish flex">
          <img
            src={imageSrc}
            alt="User image"
            className="rounded-2xl w-14 h-15 pr-2"
          />
          <span>
            <h1>{FullName}</h1>
            <h1>{email}</h1>
          </span>
        </span>

        <span className=" flex flex-grow rounded-xl justify-between text-slate-400">
          <span
            className={`${
              isLightThemeActive() ? "" : "border-2 border-white rounded-2xl"
            }`}
          >
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className={`${
                isLightThemeActive() ? "" : "bg-slate-700 "
              } text-2xl rounded-2xl outline-none`}
            />
          </span>

          <button
            onClick={toggleForm}
            className="bg-mainCol rounded-xl p-1  text-white"
          >
            + Snippet
          </button>
        </span>

        <section>
          <ul className="flex flex-row gap-4">
            {themeSwitch.map((item) => (
              <li>
                <button
                  onClick={() => setterTheme(item.id)}
                  className={`${
                    item.IsActivated ? "text-mainCol" : "text-greyish"
                  }`}
                >
                  {item.icon}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div
        className={`flex gap-32 justify-between  rounded-2xl pt-4 ${
          isLightThemeActive() ? "bg-white" : "bg-slate-700 border-2 "
        } p-2 m-3`}
      >
        <div>
          <button className="bg-mainCol px-4 py-2 mr-1 rounded-xl text-white">
            All
          </button>
          {tags.map((item) => (
          <button
            className="bg-mainCol px-4 py-2 mr-1 rounded-xl text-white"
            onClick={showNewTagMenu}
          >
            {item.name}
          </button>
        ))}
        </div>

        <button
          className="bg-mainCol px-4 py-2 rounded-xl text-white"
          onClick={showNewTagMenu}
        >
          Add Tag
        </button>
        
      </div>
    </>
  );
}

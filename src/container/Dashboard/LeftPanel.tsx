"use client";
import { useApp } from "@/context";
import JavascriptIcon from "@mui/icons-material/Javascript";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Lefty() {
  const {
    quickLink,
    secondaryLink,
    setterActive,
    setterSecondaryActive,
    isLightThemeActive,
    tagsToggle,
  } = useApp();

  return (
    <>
      <div
        className={`${
          isLightThemeActive() ? "bg-white" : "bg-slate-700"
        } p-8  h-screen w-1/5`}
      >
        <section>
          <h1 className="space-x-2 flex flex-row pb-24 items-center">
            <AcUnitIcon className="text-white bg-mainCol text-2xl rounded-3xl" />
            <span className="text-2xl font-mono font-bold">
              <span className="text-mainCol text-2xl font-mono font-bold">
                Snippet{" "}
              </span>
              <span
                className={`${
                  isLightThemeActive() ? "text-black" : "text-slate-400"
                }`}
              >
                Wizard
              </span>
            </span>
          </h1>
        </section>

        <section className="text-base pb-8 ">
          <p className="text-greyish text-base pt-8">Quick Links</p>
          <ul>
            {quickLink.map((item) => (
              <li key={item.id}>
                <button
                  className={`flex flex-row rounded-xl hover:bg-mainCol hover:text-white 
                    ${
                      item.isActive
                        ? " text-white bg-mainCol"
                        : ""
                    } ${ isLightThemeActive()? " text-mainCol":" text-white" } my-3 cursor-pointer p-2 `}
                  type="button"
                  onClick={() => setterActive(item.id)}
                >
                  {item.icon} {item.name}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-mainCol text-base">
          <p className="text-greyish text-base pt-8">Secondary Links</p>
          <ul>
            {secondaryLink.map((item) => (
              <li key={item.id}>
                <button
                  className={`flex flex-row rounded-xl hover:bg-mainCol hover:text-white 
                  ${
                    item.isActive
                      ? "bg-mainCol text-white"
                      : ""
                  } ${ isLightThemeActive()? " text-mainCol":" text-white" }  my-3 cursor-pointer p-2 `}
                  type="button"
                  onClick={() => {setterSecondaryActive(item.id); tagsToggle()}}
                >
                  {item.icon} {item.name}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="text-greyish text-base pt-8">Languages</p>
          <ul className="text-greyish p-2 flex justify-between">
            <li>
              <JavascriptIcon /> Javascript
            </li>
            <li>1</li>
          </ul>
        </section>
      </div>
    </>
  );
}
export default Lefty;

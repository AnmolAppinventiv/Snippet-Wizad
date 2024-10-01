"use client";
import { useApp } from "@/context";
import Lefty from "./LeftPanel";
import Right from "./RightPanel";
import Tags from "./Tags";

function Dashboard() {
  const { isLightThemeActive, seeTagBar } = useApp();
  return (
    <>
      <div
        className={`flex gap-4 ${
          isLightThemeActive() ? "bg-dashboard" : "bg-slate-700"
        }`}
      >
        <Lefty />
        <Right/>
      </div>
      {seeTagBar && <Tags />}
    </>
  );
}

export default Dashboard;

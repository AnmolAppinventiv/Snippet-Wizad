import React from "react";
function Content() {
  return (
    <>
      <div className="flex items-center justify-center h-52 ">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Organize Your Code Snippets{" "}
            <span className="text-purple-600">with Grace!</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-500">
            With our advanced tagging and search features, you can quickly find
            the snippet you need, right when you need it. Spend less time in
            searching for code and more time in writing it.
          </p>
        </div>
      </div>

      <div className="justify-center gap-12 py-8 flex flex-col md:flex-row  items-center">
        <div >
          <h2 className="text-2xl font-bold mb-4">
            Why choose Snippet Master?
          </h2>
          <ul className="list-disc ml-6 space-y-2 font-bold text-gray-700">
            <li>Auto-Save Snippets</li>
            <li>Advanced Snippet Tagging</li>
            <li>Manage All Snippets at one place</li>
            <li>Multi-Language Support</li>
            <li>AI Enabled Code Completion</li>
          </ul>
        </div>

        <img
          src="https://snippet.utkarsh.app/_next/image?url=%2Fsnippet-master.png&w=1920&q=75"
          alt="Snippet Master UI"
          className="rounded-lg shadow-lg w-full m-4 sm:m-0 sm:w-1/2 px-4 sm:px-4"
        />
      </div>
    </>
  );
}
export default Content;
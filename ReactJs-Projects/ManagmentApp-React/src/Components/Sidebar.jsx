import React from "react";
import Project from "./Project";

const Sidebar = ({ projects, handleButton, getId, deleteId }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-tl text-stone-200">
        Your Projects!!
      </h2>
      <div>
        <button
          onClick={() => {
            handleButton();
          }}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-00"
        >
          + Add Project
        </button>
      </div>
      <ul>
        {projects && projects.length > 0 ? (
          projects.map((data, index) => (
            <div key={data.Id} className="flex items-center space-x-4">
              <Project
                number={index + 1}
                key={data.Id}
                title={data.title}
                description={data.description}
                date={data.date}
                forSidebar={true}
              />

              <button onClick={() => getId(data.Id)} className="btn">
                Detail
              </button>
              <button onClick={() => deleteId(data.Id)} className="btn">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;

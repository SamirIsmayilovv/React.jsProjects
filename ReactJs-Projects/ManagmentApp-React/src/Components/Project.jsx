import React from "react";

const Project = ({ title, description, date, number, forSidebar }) => {
  return (
    <>
      {forSidebar ? (
        <h2>
          {number}. {title}
        </h2>
      ) : (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{date}</p>
        </div>
      )}
    </>
  );
};

export default Project;

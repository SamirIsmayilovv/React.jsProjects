import React, { useRef, useState } from "react";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Model";

const NewProject = ({ getData }) => {
  const modalRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const handleProjectData = () => {
    const title = titleRef.current.value.trim();
    const description = descRef.current.value.trim();
    const date = dateRef.current.value.trim();

    if (!title || !description || !date) {
      modalRef.current.open();
      return;
    }

    const newProject = {
      title,
      description,
      date,
      id: uuidv4(),
    };

    getData(newProject);
    titleRef.current.value = "";
    descRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <>
      <Modal ref={modalRef}>
        <h2>Invalid Input!</h2>
        <p>Looks like you have forgotten to write data</p>
      </Modal>
      <div className="w-[35rem] mt-16 flex flex-col">
        <menu className="flex items-center justify-center gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950 focus:outline-none">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleProjectData}
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-lg focus:outline-none"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="space-y-4">
          <Input ref={titleRef} isTextArea={false} label="Title" />
          <Input ref={descRef} isTextArea={true} label="Description" />
          <Input ref={dateRef} isTextArea={false} label="Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;

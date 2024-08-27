import TabButton from "./TabButton";
import React, { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Taps from "./Tabs";


const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Taps selectFunction={handleSelect} selectedData={selectedTopic} />
      {tabContent}
    </Section>
  );
};


export default Examples
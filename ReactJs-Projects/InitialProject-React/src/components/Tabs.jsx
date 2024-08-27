import TabButton from "./TabButton";


const Taps = ({ children, selectFunction, selectedData }) => {
    return (
      <>
        <menu>
          <TabButton
            isSelected={selectedData === "components"}
            onSelect={() => selectFunction("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedData === "jsx"}
            onSelect={() => selectFunction("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedData === "props"}
            onSelect={() => selectFunction("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedData === "state"}
            onSelect={() => selectFunction("state")}
          >
            State
          </TabButton>
        </menu>
        {children}
      </>
    );
  };
  
  export default Taps;
  
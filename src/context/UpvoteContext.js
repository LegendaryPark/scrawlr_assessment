import React, { createContext, useContext, useEffect, useState } from "react";
import { loadState, saveState } from "../utils/storage";

const UpvoteContext = createContext();
export const useUpvotes = () => useContext(UpvoteContext);
export const UpvoteProvider = ({ children }) => {
  const [upvoteLists, setUpvoteLists] = useState(
    loadState("upvoteLists") ?? [[], [], []]
  );
  const [upvoteStates, setUpvoteStates] = useState(
    loadState("upvoteStates") ?? [false, false, false]
  );

  useEffect(() => {
    saveState("upvoteLists", upvoteLists);
    saveState("upvoteStates", upvoteStates);
  }, [upvoteLists, upvoteStates]);

  const addUpvote = (listIndex, currentState) => {
    const newLists = [...upvoteLists];
    newLists[listIndex] = [...newLists[listIndex], currentState];
    setUpvoteLists(newLists);
    return newLists[listIndex];
  };

  const toggleUpdate = (listIndex) => {
    const updatedStates = [...upvoteStates];
    const updatedLists = [...upvoteLists];
    updatedStates[listIndex] = !updatedStates[listIndex];
    updatedLists[listIndex] = updatedLists[listIndex].map(
      () => updatedStates[listIndex]
    );

    setUpvoteStates(updatedStates);
    setUpvoteLists(updatedLists);
    return updatedLists[listIndex];
  };

  return (
    <UpvoteContext.Provider
      value={{
        upvoteLists,
        toggleUpdate,
        addUpvote,
        upvoteStates,
        setUpvoteStates,
        setUpvoteLists,
      }}
    >
      {children}
    </UpvoteContext.Provider>
  );
};

export default UpvoteProvider;

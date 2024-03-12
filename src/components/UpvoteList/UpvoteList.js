import React from "react";
import UpvoteButton from "../common/UpvoteButton/UpvoteButton";
import "./UpvoteList.css";
import { useUpvotes } from "../../context/UpvoteContext";

function UpvoteList({ listIndex }) {
  const { addUpvote, toggleUpdate, upvoteStates, upvoteLists } = useUpvotes();

  const handleToggleUpdate = () => {
    toggleUpdate(listIndex);
  };

  const handleAddUpvote = (index) => {
    addUpvote(index, upvoteStates[index]);
  };

  return (
    <div>
      {upvoteLists[listIndex].map((selected, index) => {
        return (
          <UpvoteButton
            key={index}
            selected={selected}
            onToggle={() => handleToggleUpdate()}
          />
        );
      })}
      <button onClick={() => handleAddUpvote(listIndex)}>+</button>
    </div>
  );
}

export default UpvoteList;

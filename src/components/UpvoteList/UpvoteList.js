import React from "react";
import UpvoteButton from "../common/UpvoteButton/UpvoteButton";
import "./UpvoteList.css";
import { useUpvotes } from "../../context/UpvoteContext";
import plus from "../../assets/icons/plus.svg";

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
      <div className="list">
        {upvoteLists[listIndex].map((selected, index) => {
          return (
            <UpvoteButton
              key={index}
              selected={selected}
              onToggle={() => handleToggleUpdate()}
            />
          );
        })}
      </div>
      <button onClick={() => handleAddUpvote(listIndex)}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}

export default UpvoteList;

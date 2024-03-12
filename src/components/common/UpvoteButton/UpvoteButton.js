import React from "react";
import "./UpvoteButton.css";
import arrowup from "../../../assets/icons/arrow-up.svg";

function UpvoteButton({ selected, onToggle }) {
  return (
    <button
      className={`upvote-button ${
        selected ? "background-selected" : "background-unselected"
      }`}
      onClick={onToggle}
    >
      <img
        src={arrowup}
        alt="arrow-up"
        className={selected ? "arrow-selected" : "arrow-unselected"}
      />
    </button>
  );
}

export default UpvoteButton;

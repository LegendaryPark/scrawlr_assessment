import React from "react";
import UpvoteList from "../../components/UpvoteList/UpvoteList";
import { useUpvotes } from "../../context/UpvoteContext";

function Upvote() {
  const { upvoteLists } = useUpvotes();

  return (
    <>
      {upvoteLists?.map((_, index) => {
        return <UpvoteList key={index} listIndex={index} />;
      })}
    </>
  );
}

export default Upvote;

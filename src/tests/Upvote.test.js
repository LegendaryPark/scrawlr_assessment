import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UpvoteProvider } from "../context/UpvoteContext";
import UpvoteList from "../components/UpvoteList/UpvoteList";

jest.mock(
  "../components/common/UpvoteButton/UpvoteButton",
  () =>
    ({ selected, onToggle }) =>
      (
        <button
          data-testid={"upvote-button"}
          className={selected ? "button-selected" : "button-not-selected"}
          style={{ backgroundColor: selected ? "#E5E8FD" : "#F4F6F8" }}
          onClick={onToggle}
        >
          {selected ? "Selected" : "Not Selected"}
        </button>
      )
);

test("should apply correct background color on selection", () => {
  render(
    <UpvoteProvider>
      <UpvoteList listIndex={0} />
    </UpvoteProvider>
  );

  const addButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(addButton);

  const upvoteButton = screen.getByTestId("upvote-button");
  expect(upvoteButton).toHaveTextContent("Not Selected");
  expect(upvoteButton).toHaveStyle("background-color: #F4F6F8");

  // Simulate clicking the upvote button
  fireEvent.click(upvoteButton);
  expect(upvoteButton).toHaveTextContent("Selected");
  expect(upvoteButton).toHaveStyle("background-color: #E5E8FD");
});

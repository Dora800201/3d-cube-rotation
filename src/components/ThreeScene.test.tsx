import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThreeScene from "./ThreeScene";
import { useThreeScene } from "../hooks/useThreeScene";

jest.mock("../hooks/useThreeScene");

describe("ThreeScene", () => {
  const zoomLevel = 5;
  const rotateClockwise = 90;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    const { container } = render(
      <ThreeScene zoomLevel={zoomLevel} rotateClockwise={rotateClockwise} />
    );
    expect(container).toBeInTheDocument();
  });

  it("calls useThreeScene with the correct arguments", () => {
    (useThreeScene as jest.Mock).mockImplementation(() => {});

    render(
      <ThreeScene zoomLevel={zoomLevel} rotateClockwise={rotateClockwise} />
    );

    expect(useThreeScene).toHaveBeenCalledTimes(1);
    expect(useThreeScene).toHaveBeenCalledWith(
      expect.any(Object),
      zoomLevel,
      rotateClockwise
    );
  });
});

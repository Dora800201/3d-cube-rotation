import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThreeScene from "./ThreeScene";
import { useThreeScene } from "../hooks/useThreeScene";
import React from "react";

jest.mock("../hooks/useThreeScene");

describe("ThreeScene", () => {
  it("should call useThreeScene hook with the correct arguments", () => {
    const zoomLevel = 5;
    const rotateClockwise = 90;

    (useThreeScene as jest.Mock).mockImplementation(() => {});

    render(
      <ThreeScene zoomLevel={zoomLevel} rotateClockwise={rotateClockwise} />
    );

    expect(useThreeScene).toHaveBeenCalledWith(
      expect.any(Object),
      zoomLevel,
      rotateClockwise
    );
  });

  it("should render the component with the correct style", () => {
    const { container } = render(
      <ThreeScene zoomLevel={5} rotateClockwise={90} />
    );

    const threeSceneDiv = container.querySelector(
      'div[style="width: 600px; height: 600px;"]'
    );

    expect(threeSceneDiv).toBeInTheDocument();
  });
});

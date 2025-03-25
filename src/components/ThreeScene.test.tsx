import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as THREE from "three";
import ThreeScene from "./ThreeScene";

jest.mock("three", () => {
  const actualThree = jest.requireActual("three");

  return {
    ...actualThree,
    Scene: jest.fn(() => ({
      add: jest.fn(),
    })),
    PerspectiveCamera: jest.fn(() => ({
      position: { x: 0, y: 0, z: 5, set: jest.fn() },
      lookAt: jest.fn(),
    })),
    WebGLRenderer: jest.fn(() => ({
      setSize: jest.fn(),
      render: jest.fn(),
      dispose: jest.fn(),
      domElement: document.createElement("canvas"),
    })),
    BoxGeometry: jest.fn(),
    MeshBasicMaterial: jest.fn(),
    Mesh: jest.fn(() => {
      return {
        rotation: { x: 0, y: 0, z: 0 },
      };
    }),
  };
});

// TODO: Add more unit tests

describe("ThreeScene Component", () => {
  it("should render correctly and contain a canvas", () => {
    const { container } = render(
      <ThreeScene zoomLevel={5} rotateClockwise={0} />
    );
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });
});

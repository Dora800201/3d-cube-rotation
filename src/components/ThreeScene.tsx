import { useRef } from "react";
import React from "react";
import { useThreeScene } from "../hooks/useThreeScene";

interface IThreeScenceProps {
  zoomLevel: number;
  rotateClockwise: number;
}

const ThreeScene = ({ zoomLevel, rotateClockwise }: IThreeScenceProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useThreeScene(mountRef, zoomLevel, rotateClockwise);

  return (
    <div className="flex items-center justify-center p-10">
      <div
        ref={mountRef}
        style={{ width: "min(90vw, 90vh)", height: "min(90vw, 90vh)" }}
      ></div>
    </div>
  );
};

export default ThreeScene;

import { useState } from "react";
import Button from "./Button";
import ThreeScene from "./ThreeScene";

const Content = () => {
  const [zoomLevel, setZoomLevel] = useState(3);
  const [rotateClockwise, setRotateClockwise] = useState(1);

  function handleRotation(): void {
    setRotateClockwise(rotateClockwise - 0.1);
  }

  function handleZoomIn(): void {
    setZoomLevel(zoomLevel - 0.3);
  }

  return (
    <div className="min-h-50 flex flex-col bg-amber-50 justify-center items-center gap-10 md:flex-row">
      <div className="flex gap-2 m-10 md:flex-col">
        <Button label="Rotation" onClick={handleRotation}></Button>
        <Button label="Zoom in" onClick={handleZoomIn}></Button>
        <Button
          label="Zoom out"
          onClick={() => setZoomLevel(zoomLevel + 0.3)}
        ></Button>
        <Button label="Reset" onClick={() => setZoomLevel(5)}></Button>
      </div>
      <ThreeScene zoomLevel={zoomLevel} rotateClockwise={rotateClockwise} />
    </div>
  );
};

export default Content;

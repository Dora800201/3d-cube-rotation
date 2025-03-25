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
    <div className="min-h-50 flex bg-amber-50 justify-center items-center gap-10">
      <div className="flex flex-col gap-2">
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

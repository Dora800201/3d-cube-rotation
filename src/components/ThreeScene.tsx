import { useEffect, useRef } from "react";
import React from "react";
import * as THREE from "three";

interface Props {
  zoomLevel: number;
  rotateClockwise: number;
}

const ThreeScene = ({ zoomLevel, rotateClockwise }: Props) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = zoomLevel;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff5733,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.set(0, 0, 5);

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.y = rotateClockwise;
      camera.position.z = zoomLevel;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [zoomLevel, rotateClockwise]);

  return (
    <div className="flex items-center justify-center p-10">
      <div ref={mountRef} style={{ width: "600px", height: "600px" }}></div>
    </div>
  );
};

export default ThreeScene;

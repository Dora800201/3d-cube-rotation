import { useEffect, useRef } from "react";
import * as THREE from "three";
import React from "react";

const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;

export function useThreeScene(
  containerRef: React.RefObject<HTMLDivElement | null>,
  zoomLevel: number,
  rotateClockwise: number
) {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const WIDTH = containerRef.current.clientWidth;
    const HEIGHT = containerRef.current.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(FOV, WIDTH / HEIGHT, NEAR, FAR);
    camera.position.z = zoomLevel;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff5733,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.y = rotateClockwise;
      camera.position.z = zoomLevel;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;

      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      console.log(newWidth, newHeight);

      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [containerRef, zoomLevel, rotateClockwise]);
}

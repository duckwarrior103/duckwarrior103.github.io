import * as THREE from "three";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function MyThree() {
  const refContainer = useRef(null);

  useEffect(() => {
    // === THREE.JS CODE START ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // Set the camera position
    camera.position.z = 5;

    // Lighting setup
    // Ambient Light (soft, overall light)
    const ambientLight = new THREE.AmbientLight(0x404040, 30); // Soft white light
    scene.add(ambientLight);

    // Directional Light (strong light with shadows)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(5, 5, 5); // Set light position
    scene.add(directionalLight);
    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    let wall_e;

    const loader = new GLTFLoader();
    loader.load("./public/wall_e.glb", function (gltf) {
      wall_e = gltf.scene;
      scene.add(wall_e);
    });

    scene.add(loadWallE());

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable smooth controls
    controls.dampingFactor = 0.25;
    controls.enableZoom = true; // Enable zoom
    controls.enablePan = false;
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Maximum zoom in distance

    // Cleanup the Three.js scene on component unmount
    return () => {
      renderer.dispose();
      // Optionally, remove the renderer's DOM element if needed
      if (refContainer.current) {
        refContainer.current.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array means it will only run once when the component mounts

  return <div ref={refContainer}></div>;
}

function loadWallE() {
  let wall_e;
  const loader = new GLTFLoader();
  loader.load("./public/wall_e.glb", function (gltf) {
    wall_e = gltf.scene;
  });
  return wall_e;
}

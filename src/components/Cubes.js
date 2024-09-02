import React, { useEffect, useRef, useState } from "react";
import * as QQ from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import galaxyt from "../static/texture/galaxy.jpg";
import databases from "../static/texture/databases.jpg";
import languages from "../static/texture/languages.jpg";
import about from "../static/texture/about.jpg";
import cta from "../static/texture/cta.jpg";
import { Link } from "react-router-dom";

function Cubes() {
  const domRef = useRef(null);
  useEffect(() => {
    const textureLoader = new QQ.TextureLoader();
    var galaxyTexture = textureLoader.load(galaxyt);
    var aboutTexture = textureLoader.load(about);
    var databasesTexture = textureLoader.load(databases);
    var ctaTexture = textureLoader.load(cta);
    var languagesTexture = textureLoader.load(languages);

    const scene = new QQ.Scene();
    const renderer = new QQ.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight*0.98);
    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const camera = new QQ.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
   
    domRef.current.appendChild(renderer.domElement);


    scene.background = galaxyTexture;

    // Create a texture from the canvas
    const textures = [databasesTexture, ctaTexture, languagesTexture, aboutTexture];
    textures.forEach((texture) => {
      texture.minFilter = QQ.NearestFilter;
      texture.magFilter = QQ.NearestFilter;
    });
    // Function to create a plane and add it to the scene
    function createPlane(width, height, map, position, rotation) {
      const geometry = new QQ.PlaneGeometry(width, height);
      let material;
      console.log(typeof map);
      if (typeof map == typeof {}) {
        material = new QQ.MeshBasicMaterial({ map: map, side: QQ.DoubleSide });
      } else {
        material = new QQ.MeshBasicMaterial({
          color: map,
          side: QQ.DoubleSide,
        });
      }

      const plane = new QQ.Mesh(geometry, material);
      // Set position and rotation
      plane.position.set(...position);
      plane.rotation.set(...rotation);
      // plane.scale.setScalar(4)
      scene.add(plane);
    }
    // Create planes aligned with different axes
    // Plane aligned with the XY plane
    createPlane(5, 5, aboutTexture, [0, 0, 2.5], [0, 0, 0]);
    //middle planes
    createPlane(5, 5, "black", [0, -2.5, 0], [Math.PI / 2, 0, 0]);
    createPlane(5, 5, "black", [0, 2.5, 0], [Math.PI / 2, 0, 0]);

    createPlane(5, 5, databasesTexture, [-2.5, 0, 0], [0, -Math.PI / 2, 0]);
    // Plane aligned with the XZ plane
    // Plane aligned with the YZ plane
    createPlane(5, 5, languagesTexture, [2.5, 0, 0], [0, Math.PI / 2, 0]);
    createPlane(5, 5, ctaTexture, [0, 0, -2.5], [-Math.PI, 0, 0]);


    function animate() {
      scene.rotation.y -= 0.0068;

      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  }, []);
  return (
    <>
      <div ref={domRef}></div>
    

    </>
  );
}

export default Cubes;

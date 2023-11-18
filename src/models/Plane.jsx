import React from "react"

import planeScene from '../assets/3d/plane.glb';
import { useGLTF } from "@react-three/drei";


const Plain = () => {
  const { scene, animations } = useGLTF(planeScene);


  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  )
}
export default Plain
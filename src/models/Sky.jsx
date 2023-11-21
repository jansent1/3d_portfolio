import { useGLTF } from "@react-three/drei"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {

  const sky = useGLTF(skyScene);
  const skyref = useRef();

  /*Make the sky move:*/ 
  useFrame((_, delta) => {
    if(isRotating){
      skyref.current.rotation.y += 0.15 * delta;
    }
  })

  return (
    <mesh ref={skyref}>
        <primitive object={sky.scene} />
    </mesh>
  )
}
export default Sky
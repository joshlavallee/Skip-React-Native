import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei/native'
import modelPath from '../skiplogo.glb'

export default SkipLogo = ({ sensor }) => {
    const logoRef = useRef();
    const { nodes, materials } = useGLTF(modelPath);

    useFrame(() => {
        let { x, y } = sensor.value;

        logoRef.current.rotation.x += ~~(x * 25) / 5000;
        logoRef.current.rotation.z += ~~(y * 25) / 5000;
    })
    
    return (
        <mesh
            ref={logoRef}
            castShadow
            receiveShadow
            geometry={nodes.Curve002.geometry}
            material={materials.SVGMat}
            scale={40}
            position={[-0.175, 0, 0]}
            rotation={[Math.PI/2.2, 0, 0]}
        />
    )
}

useGLTF.preload(modelPath)

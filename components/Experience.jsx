import { Canvas } from '@react-three/fiber';

export default Experience = ({ children }) => {
    return (
        <Canvas>
            <ambientLight intensity={.5} />
            <rectAreaLight intensity={.75} color={"white"} position={[0, .5, 2]} width={10} height={10} />
            <pointLight position={[-2, 0, .5]} intensity={1} color={"white"} castShadow/>
            <pointLight position={[-1, 0, -.25]} intensity={1} color={"white"} castShadow/>
            <pointLight position={[1, 0, .25]} intensity={1} color={"orange"} castShadow/>
            <pointLight position={[2, 0, .5]} intensity={1} color={"white"} castShadow/>
            { children }
        </Canvas>
    );
};

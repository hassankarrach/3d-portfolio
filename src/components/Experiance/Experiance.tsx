import  {
  useRef,
  Suspense,
  RefObject,
} from "react";
import Room from "./Room";
import { StyledExperiance } from "./Experiance.styled";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";

const Experiance = () => {
  const CanvasRef = useRef<HTMLCanvasElement | undefined>(undefined) as
    | RefObject<HTMLCanvasElement>
    | undefined;

  return (
    <StyledExperiance>
      <Suspense fallback={null}>
        <Canvas className="Canvas" flat ref={CanvasRef}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Camera />
          {/* <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          enableZoom={false}
        /> */}
          <Room />
          {/* <Model /> */}
        </Canvas>
      </Suspense>
    </StyledExperiance>
  );
};

export default Experiance;

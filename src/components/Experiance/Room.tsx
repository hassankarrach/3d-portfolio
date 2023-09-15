import {
  useRef,
  useEffect,
  useContext,
  useLayoutEffect,
  Suspense,
  useState,
} from "react";
import {
  Float,
  OrbitControls,
  Sparkles,
  useCamera,
  useGLTF,
  Html,
} from "@react-three/drei";
import {
  useTexture,
  PerspectiveCamera,
  useProgress,
  useAspect,
  useVideoTexture,
} from "@react-three/drei";
import { gsap, Linear } from "gsap";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  HueSaturation,
} from "@react-three/postprocessing";
import { StateContext } from "../../context/CameraContext";
import { CameraAnimate } from "./animations";
import { AnimationsData } from "../../data/AnimationsData";
import { useCameraPosition } from "../../hooks/useCameraPosition";
import * as THREE from "three";
import { Box3 } from "three";

const VideoMesh = ({ videoId }) => {
  const [texture, setTexture] = useState();

  useLoader(
    async () => {
      const video = await fetch(`https://www.youtube.com/embed/${videoId}`);
      const videoElement = await video.then((response) => response.blob());
      const texture = new Texture(videoElement);
      setTexture(texture);
    },
    { cache: true }
  );

  return (
    <mesh position={[0.594, 2.04, 1.072]} rotation={[0, Math.PI / 2, 0]}>
      <planeGeometry args={[1.38, 0.6, 1]} />
      <mesh.material>
        <mesh.texture attach="color" />
      </mesh.material>
    </mesh>
  );
};

const Room = () => {
  const meshRef = useRef();
  //VideoUrl
  const videoUrl = "https://www.youtube.com/embed/GVmJQLnS--c";
  //VideoTexture
  const texture = useVideoTexture("./videos/test.mp4", {});
  const MacVideo = useVideoTexture("./videos/Mac.mp4", {});
  const Refresh = useVideoTexture("./videos/refresh.mp4", {});
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  MacVideo.wrapS = THREE.RepeatWrapping;
  MacVideo.wrapT = THREE.RepeatWrapping;
  MacVideo.repeat.set(1, 1);
  Refresh.wrapS = THREE.RepeatWrapping;
  Refresh.wrapT = THREE.RepeatWrapping;
  Refresh.repeat.set(1, 1);

  //Context & Hooks
  const CurrentCameraPosition = useCameraPosition();
  const { CameraRef, CurrentSection, setCameraPos, CameraPos } =
    useContext(StateContext);

  //Model
  const { nodes, materials } = useGLTF("./Models/Room.glb");
  //Textures
  // const roomAssets = useTexture("./Textures/assets.jpg");
  const BakcgroundTexture = useTexture("./Textures/Background.jpg");
  const RoomBaked = useTexture("./Textures/RoomBacked.jpg");
  // roomAssets.flipY = false;
  BakcgroundTexture.flipY = false;
  RoomBaked.flipY = false;

  //IntroAnimation
  useEffect(() => {
    //Play_Intro_Animation
    CameraRef &&
      CameraAnimate(
        CameraRef,
        AnimationsData[0].EndPosition,
        AnimationsData[0].CameraLookAt
      );
    //Updating_CameraPos
    setCameraPos(CurrentCameraPosition);
  }, [CameraRef]);
  //Sections_OnScroll_Animations
  useEffect(() => {
    if (CameraRef) {
      switch (CurrentSection) {
        case 1:
          CameraAnimate(
            CameraRef,
            AnimationsData[0].EndPosition,
            AnimationsData[0].CameraLookAt
          );
          break;
        case 2:
          CameraAnimate(
            CameraRef,
            AnimationsData[1].EndPosition,
            AnimationsData[1].CameraLookAt
          );

          break;
        case 3:
          CameraAnimate(
            CameraRef,
            AnimationsData[2].EndPosition,
            AnimationsData[2].CameraLookAt
          );
          break;
        case 4:
          CameraAnimate(
            CameraRef,
            AnimationsData[3].EndPosition,
            AnimationsData[3].CameraLookAt
          );
          break;
        case 5:
          CameraAnimate(
            CameraRef,
            AnimationsData[4].EndPosition,
            AnimationsData[4].CameraLookAt
          );
          break;
        default:
          break;
      }
    }
  }, [CameraRef, CurrentSection]);

  return (
    <>
      {/* <Sparkles scale={[7, 7, 7]} count={700} color={"white"} />
      <fog attach="fog" args={["#9494F0", 3, 15]} /> */}
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.05}
          bokehScale={1}
          height={400}
        />

        <group
          name="Scene"
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.5, 0.5, 0.5]}
          position={[0.5, -1.3, 0]}
        >
          <group
            position={[1.26, 0, 0.878]}
            rotation={[0, 1.571, 0]}
            scale={[1.1, 1.1, 0.87]}
          >
            <mesh
              geometry={
                nodes.simple_modern_computer_desk_pasted__phong6_0001.geometry
              }
              material={
                nodes.simple_modern_computer_desk_pasted__phong6_0001.material
              }
              position={[-0.074, 0.011, -0.686]}
            >
              <meshBasicMaterial map={RoomBaked} />
            </mesh>
          </group>
          <group
            position={[0.824, 1.563, -0.389]}
            rotation={[0, 1.171, Math.PI]}
            scale={1.328}
          >
            <mesh
              position={[0.1, -0.2, -0.23]}
              rotation={[Math.PI / 18, 0, Math.PI]}
            >
              <planeGeometry args={[0.64, 0.35, 1]} />
              <meshBasicMaterial map={Refresh} toneMapped={false} />
            </mesh>
            <mesh
              geometry={nodes.Object_2.geometry}
              material={nodes.Object_2.material}
              position={[-0.231, 0.03, -0.265]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <meshBasicMaterial map={RoomBaked} />
            </mesh>
          </group>
          <mesh
            geometry={nodes.Keyboard.geometry}
            material={nodes.Keyboard.material}
            position={[0, 0.013, 0]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>

          <mesh
            geometry={nodes.Mouse.geometry}
            material={nodes.Mouse.material}
            position={[1.117, 1.529, 0.649]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.mac.geometry}
            material={nodes.mac.material}
            position={[0.594, 1.981, 1.072]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes["mac-stander"].geometry}
            material={nodes["mac-stander"].material}
            position={[0, 0.014, 0]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>

          <mesh position={[0.594, 2.04, 1.072]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[1.38, 0.6, 1]} />
            {/* <meshBasicMaterial map={MacVideo} toneMapped={false} /> */}
          </mesh>
          <Html
            transform
            position={[0.594, 2.04, 1.072]} // Use the same position as the Mac screen mesh
            rotation={[0, Math.PI / 2, 0]} // Use the same rotation as the Mac screen mesh
            scale={0.4}
            occlude="blending"
          >
            <div className="MacVideoPlayer">
              <p>test</p>
            </div>
          </Html>

          {/* <group position={[-2.57, 1.8, -0.01]} rotation-y={1.565}>
            <Html
              transform
              prepend
              wrapperClass="htmlScreen"
              scale={0.35}
              distanceFactor={1.17}
              zIndexRange={[0, 0]}
            >
              <iframe
                id="iframe"
                src="https://www.youtube.com/embed/3d6CyuhRUZU"
                title="myStaticWebsite"
                style={{
                  width: 1500,
                }}
              />
            </Html>
            <mesh
              position={[0.594, 2.04, 1.072]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <planeGeometry args={[1.38, 0.6, 1]} />
            </mesh>
          </group> */}

          <mesh
            geometry={nodes.React.geometry}
            material={nodes.React.material}
            position={[0.249, 3.005, 1.535]}
            rotation={[0.065, 1.309, 0]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes["React-Book"].geometry}
            material={nodes["React-Book"].material}
            position={[0.24, 3.039, 0.757]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Tarbouch.geometry}
            material={nodes.Tarbouch.material}
            position={[0.25, 2.904, 0.304]}
            rotation={[3.129, 0.082, -3.135]}
          >
            <meshBasicMaterial map={RoomBaked} />
            <mesh
              geometry={nodes["Tarbouch-Khoyout"].geometry}
              material={nodes["Tarbouch-Khoyout"].material}
              position={[0, 0.095, 0]}
              rotation={[0.03, 0.351, -0.005]}
            >
              <mesh
                geometry={nodes.khayt1.geometry}
                material={nodes.khayt1.material}
                position={[-0.038, -0.004, 0.003]}
                rotation={[0.025, 0.325, -0.077]}
                scale={0.092}
              >
                <meshBasicMaterial map={RoomBaked} />
              </mesh>
              <mesh
                geometry={nodes.khayt2.geometry}
                material={nodes.khayt2.material}
                position={[-0.038, -0.004, 0.003]}
                rotation={[0, 0, -0.073]}
                scale={0.092}
              >
                <meshBasicMaterial map={RoomBaked} />
              </mesh>
              <mesh
                geometry={nodes.khayt3.geometry}
                material={nodes.khayt3.material}
                position={[-0.038, -0.004, 0.003]}
                rotation={[0, 0, -0.073]}
                scale={0.092}
              >
                <meshBasicMaterial map={RoomBaked} />
              </mesh>
            </mesh>
          </mesh>
          <mesh
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[0.196, 2.819, 0.941]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[0.096, 2.686, 1.731]}
            rotation={[-1.571, Math.PI / 2, 0]}
            scale={[-0.105, -0.028, -0.09]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            position={[0.096, 2.686, 0.153]}
            rotation={[-1.571, Math.PI / 2, 0]}
            scale={[-0.105, -0.028, -0.09]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes["React-Book001"].geometry}
            material={nodes["React-Book001"].material}
            position={[0.24, 3.039, 0.818]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes["React-Book002"].geometry}
            material={nodes["React-Book002"].material}
            position={[0.24, 3.039, 0.879]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes["React-Book003"].geometry}
            material={nodes["React-Book003"].material}
            position={[0.24, 3.039, 0.939]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes["React-Book004"].geometry}
            material={nodes["React-Book004"].material}
            position={[0.221, 3.039, 1.057]}
            rotation={[-0.311, 0, 0]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.WallBoard.geometry}
            material={nodes.WallBoard.material}
            position={[0.02, 2.584, -1.885]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Paper1.geometry}
            material={nodes.Paper1.material}
            position={[0.025, 2.815, -1.559]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.PaperFixer.geometry}
            material={nodes.PaperFixer.material}
            position={[0.026, 3.001, -1.553]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.PaperFixer2.geometry}
            material={nodes.PaperFixer2.material}
            position={[0.026, 2.891, -2.058]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.PaperFixer3.geometry}
            material={nodes.PaperFixer3.material}
            position={[0.026, 2.425, -1.802]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Paper1001.geometry}
            material={nodes.Paper1001.material}
            position={[0.025, 2.707, -2.057]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Paper1002.geometry}
            material={nodes.Paper1002.material}
            position={[0.025, 2.246, -1.807]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Cube001.geometry}
            material={nodes.Cube001.material}
            position={[-0.107, 0.479, 0.835]}
            scale={0.762}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Cube004.geometry}
            material={nodes.Cube004.material}
            position={[-0.107, 0.152, 0.353]}
            scale={0.762}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Cube005.geometry}
            material={nodes.Cube005.material}
            position={[-0.107, -0.192, 0.835]}
            scale={0.762}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Cube006.geometry}
            material={nodes.Cube006.material}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Cube007.geometry}
            material={nodes.Cube007.material}
            position={[0.663, 0.709, -0.744]}
          >
            <meshBasicMaterial map={RoomBaked} />
          </mesh>
          <mesh
            geometry={nodes.Cube008.geometry}
            material={nodes.Cube008.material}
            position={[6.005, 6.011, 0.793]}
          >
            <meshBasicMaterial map={BakcgroundTexture} />
          </mesh>
        </group>
      </EffectComposer>
    </>
  );
};

export default Room;

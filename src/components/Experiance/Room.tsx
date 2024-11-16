import {
  useEffect,
  useContext,
  useState,
} from "react";
import {
  Sparkles,
  useGLTF,
  Text,
} from "@react-three/drei";
import {
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { gsap, Linear } from "gsap";
import { useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
} from "@react-three/postprocessing";
import { StateContext } from "../../context/CameraContext";
import { CameraAnimate } from "./animations";
import { AnimationsData } from "../../data/AnimationsData";
import { useCameraPosition } from "../../hooks/useCameraPosition";
import * as THREE from "three";
//Utils
import { isMobile } from "../../utils/IsMobile";
import useSound from "use-sound";

const Room = () => {
  //Sounds
  const [CameraMove] = useSound("/Sounds/move.mp3", {
    volume: 0.1,
    playbackRate: 0.4,
    interrupt: true,
  });
  //Refs
  const isMobileDevice = isMobile();
  //VideoTexture
  const MacVideo = useVideoTexture("./videos/Mac.mp4", {});
  const PhotoshopVideo = useVideoTexture("./videos/photoshop.mp4", {});
  const ReactVideo = useVideoTexture("./videos/react.mp4", {});
  const TerminalVideo = useVideoTexture("./videos/terminal.mp4", {});

  const [toggle, setToggle] = useState(false);

  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  MacVideo.wrapS = THREE.RepeatWrapping;
  MacVideo.wrapT = THREE.RepeatWrapping;
  MacVideo.repeat.set(1, 1);

  TerminalVideo.wrapS = THREE.RepeatWrapping;
  TerminalVideo.wrapT = THREE.RepeatWrapping;
  TerminalVideo.repeat.set(1, 1);

  //Context & Hooks
  const {
    CameraRef,
    CurrentSection,
    Start,
    FocusedSkill,
    setFocusedSkill,
  } = useContext(StateContext);

  //Model
  const { nodes } = useGLTF("./Models/Room.glb") as any;

  //Textures
  // const roomAssets = useTexture("./Textures/assets.jpg");
  const BakcgroundTexture = useTexture("./Textures/Background.jpg");
  const RoomBaked = useTexture("./Textures/RoomBacked2.jpg");
  // roomAssets.flipY = false;
  BakcgroundTexture.flipY = false;
  RoomBaked.flipY = false;
  // TerminalTexture.flipY = false;


  //Sections_OnScroll_Animations
  useEffect(() => {
    setIsTransitioning(true);

    setTimeout(() => {
      setToggle(!toggle);
      // End transition
      setIsTransitioning(false);
    }, 2000);

    if (CameraRef) {
      if (CurrentSection >= 1 && CurrentSection <= 5 && Start) {
        const index = CurrentSection - 1; // Calculate array index (0-based)
        Start && CameraMove(); // Only called when Start is true
        CameraAnimate(
          CameraRef,
          isMobileDevice
            ? AnimationsData[index].EndPositionMob
            : AnimationsData[index].EndPosition,
          AnimationsData[index].CameraLookAt
        );
        setIsHovered(false);
        setFocusedSkill(null);
      }
    }
  }, [CameraRef, CurrentSection, Start]);

  useFrame(({ mouse }) => {
    if (CameraRef && !CameraRef.current || isTransitioning) return;
    if (CurrentSection >= 1 && CurrentSection <= 5 && isHovered) {
      const index = CurrentSection - 1; // Calculate array index (0-based)
      !isMobileDevice &&
        gsap.to(CameraRef.current.rotation, {
          y:
            AnimationsData[index].CameraLookAt.y +
            mouse.x * (FocusedSkill != null ? -0.4 : -0.2),
          duration: 1,
          ease: Linear.easeNone,
        });
    }
  });

  return (
    <>
      <Sparkles scale={[7, 7, 7]} count={700} color={"white"} />
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.1}
          bokehScale={1}
          height={400}
        />
        <group
          name="Scene"
          rotation={[0, -Math.PI / 2, 0]} //here1
          scale={[0.5, 0.5, 0.5]}
          position={[0.5, -1.3, 0]}
          onPointerMove={() => {
            setIsHovered(true);
          }}
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
              <planeGeometry args={[0.64, 0.35, 1]}/>
              <meshBasicMaterial map={TerminalVideo} />
              <Text
                scale={[0.05, 0.05, 0.05]}
                color="black" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, 0, 0.01]}
                font="/Fonts/LEMONMILK-Light.otf"
              >
                {
                FocusedSkill != null ? FocusedSkill
                : CurrentSection == 2 ? "/About Me" 
                : CurrentSection == 3 ? "/Skills"
                : CurrentSection == 4 ? "/Projects"
                : "Welcome 👋"
                }
              </Text>
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
            <meshBasicMaterial
              map={
                FocusedSkill === "React js" ? ReactVideo
                : FocusedSkill === "Photoshop" ? PhotoshopVideo
                : MacVideo}
              toneMapped={false}
            />
          </mesh>

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

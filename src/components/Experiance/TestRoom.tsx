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
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    simple_modern_computer_desk_pasted__phong6_0001: THREE.Mesh;
    Object_2: THREE.Mesh;
    trashcan_MainAtlasMat1_0: THREE.Mesh;
    ["Tux-printable_1"]: THREE.Mesh;
    ["Tux-printable_2"]: THREE.Mesh;
    ["Tux-printable_0"]: THREE.Mesh;
    wallEdges: THREE.Mesh;
    Wall: THREE.Mesh;
    TableLeg1: THREE.Mesh;
    Mouse: THREE.Mesh;
    chair: THREE.Mesh;
    TableLeg2: THREE.Mesh;
    Keyboard: THREE.Mesh;
    ["React-Book001"]: THREE.Mesh;
    mac: THREE.Mesh;
    TableLeg4: THREE.Mesh;
    ["React-Book"]: THREE.Mesh;
    ["mac-screen"]: THREE.Mesh;
    ["React-Book003"]: THREE.Mesh;
    TableLeg3: THREE.Mesh;
    ["mac-stander"]: THREE.Mesh;
    WallBoard: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    PaperFixer2: THREE.Mesh;
    ["React-Book002"]: THREE.Mesh;
    Paper1001: THREE.Mesh;
    ["React-Book004"]: THREE.Mesh;
    Paper1002: THREE.Mesh;
    Paper1: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube005: THREE.Mesh;
    PaperFixer: THREE.Mesh;
    PaperFixer3: THREE.Mesh;
    Cube004: THREE.Mesh;
    React: THREE.Mesh;
    Tarbouch: THREE.Mesh;
    ["Tarbouch-Khoyout"]: THREE.Mesh;
    khayt2: THREE.Mesh;
    khayt1: THREE.Mesh;
    khayt3: THREE.Mesh;
  };
  materials: {};
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./Models/Room.glb"
  ) as unknown as GLTFResult;

  //Context & Hooks
  const CurrentCameraPosition = useCameraPosition();
  const { CameraRef, CurrentSection, setCameraPos, CameraPos } =
    useContext(StateContext);

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
    <group
      {...props}
      dispose={null}
      rotation={[0, -Math.PI / 2, 0]}
      scale={[0.5, 0.5, 0.5]}
      position={[0.5, -1.3, 0]}
    >
      <group
        position={[1.26, 0, 0.88]}
        rotation={[0, 1.57, 0]}
        scale={[1.1, 1.1, 0.87]}
      >
        <mesh
          geometry={
            nodes.simple_modern_computer_desk_pasted__phong6_0001.geometry
          }
          material={
            nodes.simple_modern_computer_desk_pasted__phong6_0001.material
          }
          position={[-0.07, 0, -0.69]}
        />
      </group>
      <group
        position={[0.82, 1.55, -0.39]}
        rotation={[0, 1.17, Math.PI]}
        scale={1.33}
      >
        <mesh
          geometry={nodes.Object_2.geometry}
          material={nodes.Object_2.material}
          position={[-0.23, 0.03, -0.27]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[0.55, 0.2, 3.06]} scale={[0.72, 0.96, 0.72]}>
        <mesh
          geometry={nodes.trashcan_MainAtlasMat1_0.geometry}
          material={nodes.trashcan_MainAtlasMat1_0.material}
          position={[0.24, 0, -1.12]}
        />
      </group>
      <group
        position={[0.62, 1.51, 2.4]}
        rotation={[-Math.PI / 2, 0, 2.05]}
        scale={0}
      >
        <mesh
          geometry={nodes["Tux-printable_1"].geometry}
          material={nodes["Tux-printable_1"].material}
          position={[16.22, 119.29, 1.28]}
          rotation={[0, 0, 0.05]}
        />
        <mesh
          geometry={nodes["Tux-printable_2"].geometry}
          material={nodes["Tux-printable_2"].material}
          position={[16.22, 119.29, 1.28]}
          rotation={[0, 0, 0.05]}
        />
        <mesh
          geometry={nodes["Tux-printable_0"].geometry}
          material={nodes["Tux-printable_0"].material}
          position={[16.22, 119.29, 1.28]}
          rotation={[0, 0, 0.05]}
        />
      </group>
      <mesh
        geometry={nodes.wallEdges.geometry}
        material={nodes.wallEdges.material}
        position={[3.16, 3.18, -1.16]}
      />
      <mesh
        geometry={nodes.Wall.geometry}
        material={nodes.Wall.material}
        position={[3.16, 3.18, -1.16]}
      />
      <mesh
        geometry={nodes.TableLeg1.geometry}
        material={nodes.TableLeg1.material}
        position={[0.17, 1.35, 2.61]}
      />
      <mesh
        geometry={nodes.Mouse.geometry}
        material={nodes.Mouse.material}
        position={[1.12, 1.52, 0.65]}
      />
      <mesh
        geometry={nodes.chair.geometry}
        material={nodes.chair.material}
        position={[1.72, -0.04, 2.66]}
        rotation={[0, -0.77, 0]}
        scale={0.9}
      />
      <mesh
        geometry={nodes.TableLeg2.geometry}
        material={nodes.TableLeg2.material}
        position={[0.17, 1.35, -0.68]}
      />
      <mesh
        geometry={nodes.Keyboard.geometry}
        material={nodes.Keyboard.material}
      />
      <mesh
        geometry={nodes["React-Book001"].geometry}
        material={nodes["React-Book001"].material}
        position={[0.24, 3.04, 0.82]}
      />
      <mesh
        geometry={nodes.mac.geometry}
        material={nodes.mac.material}
        position={[0.59, 1.97, 1.07]}
      />
      <mesh
        geometry={nodes.TableLeg4.geometry}
        material={nodes.TableLeg4.material}
        position={[1.16, 1.35, -0.68]}
      />
      <mesh
        geometry={nodes["React-Book"].geometry}
        material={nodes["React-Book"].material}
        position={[0.24, 3.04, 0.76]}
      />
      <mesh
        geometry={nodes["mac-screen"].geometry}
        material={nodes["mac-screen"].material}
        position={[0.59, 1.97, 1.07]}
      />
      <mesh
        geometry={nodes["React-Book003"].geometry}
        material={nodes["React-Book003"].material}
        position={[0.24, 3.04, 0.94]}
      />
      <mesh
        geometry={nodes.TableLeg3.geometry}
        material={nodes.TableLeg3.material}
        position={[1.16, 1.35, 2.61]}
      />
      <mesh
        geometry={nodes["mac-stander"].geometry}
        material={nodes["mac-stander"].material}
      />
      <mesh
        geometry={nodes.WallBoard.geometry}
        material={nodes.WallBoard.material}
        position={[0.02, 2.58, -1.88]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0.2, 2.82, 0.94]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[0.1, 2.69, 1.73]}
        rotation={[-1.57, Math.PI / 2, 0]}
        scale={[-0.11, -0.03, -0.09]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[0.1, 2.69, 0.15]}
        rotation={[-1.57, Math.PI / 2, 0]}
        scale={[-0.11, -0.03, -0.09]}
      />
      <mesh
        geometry={nodes.PaperFixer2.geometry}
        material={nodes.PaperFixer2.material}
        position={[0.03, 2.89, -2.06]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes["React-Book002"].geometry}
        material={nodes["React-Book002"].material}
        position={[0.24, 3.04, 0.88]}
      />
      <mesh
        geometry={nodes.Paper1001.geometry}
        material={nodes.Paper1001.material}
        position={[0.03, 2.71, -2.06]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes["React-Book004"].geometry}
        material={nodes["React-Book004"].material}
        position={[0.22, 3.04, 1.06]}
        rotation={[-0.31, 0, 0]}
      />
      <mesh
        geometry={nodes.Paper1002.geometry}
        material={nodes.Paper1002.material}
        position={[0.03, 2.25, -1.81]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Paper1.geometry}
        material={nodes.Paper1.material}
        position={[0.03, 2.81, -1.56]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-0.11, 0.48, 0.83]}
        scale={0.76}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-0.11, -0.19, 0.83]}
        scale={0.76}
      />
      <mesh
        geometry={nodes.PaperFixer.geometry}
        material={nodes.PaperFixer.material}
        position={[0.03, 3, -1.55]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.PaperFixer3.geometry}
        material={nodes.PaperFixer3.material}
        position={[0.03, 2.43, -1.8]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-0.11, 0.15, 0.35]}
        scale={0.76}
      />
      <mesh
        geometry={nodes.React.geometry}
        material={nodes.React.material}
        position={[0.25, 3, 1.53]}
        rotation={[0.06, 1.31, 0]}
      />
      <mesh
        geometry={nodes.Tarbouch.geometry}
        material={nodes.Tarbouch.material}
        position={[0.25, 2.9, 0.3]}
        rotation={[3.13, 0.08, -3.13]}
      >
        <mesh
          geometry={nodes["Tarbouch-Khoyout"].geometry}
          material={nodes["Tarbouch-Khoyout"].material}
          position={[0, 0.1, 0]}
          rotation={[0.03, 0.35, 0]}
        >
          <mesh
            geometry={nodes.khayt2.geometry}
            material={nodes.khayt2.material}
            position={[-0.04, 0, 0]}
            rotation={[0, 0, -0.07]}
            scale={0.09}
          />
          <mesh
            geometry={nodes.khayt1.geometry}
            material={nodes.khayt1.material}
            position={[-0.04, 0, 0]}
            rotation={[0.02, 0.33, -0.08]}
            scale={0.09}
          />
          <mesh
            geometry={nodes.khayt3.geometry}
            material={nodes.khayt3.material}
            position={[-0.04, 0, 0]}
            rotation={[0, 0, -0.07]}
            scale={0.09}
          />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/Room.glb");

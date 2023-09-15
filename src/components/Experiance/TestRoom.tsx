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
import { Html } from "@react-three/drei";

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
    "./Models/Room2.glb"
  ) as unknown as GLTFResult;

  //Context & Hooks
  const CurrentCameraPosition = useCameraPosition();
  const { CameraRef, CurrentSection, setCameraPos, CameraPos, LoadingStatus } =
    useContext(StateContext);

  //Textures
  const texture = useTexture("./Textures/baked.png");
  texture.flipY = false;

  return (
    <>
      <Sparkles scale={[7, 7, 7]} count={700} color={"white"} />
      <EffectComposer>
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.monitor.geometry}
            material={nodes.monitor.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.screen.geometry}
            material={nodes.screen.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chair.geometry}
            material={nodes.chair.material}
            position={[-0.909, 1.409, 0.004]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.macbook.geometry}
            material={nodes.macbook.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["mac-screen"].geometry}
            material={nodes["mac-screen"].material}
          />
          <>
            <primitive object={screen}>
              <group position={[-2.57, 1.8, -0.01]} rotation-y={1.565}>
                <Html
                  transform
                  prepend
                  wrapperClass="htmlScreen"
                  scale={0.35}
                  distanceFactor={1.17}
                  zIndexRange={[0, 0]}
                >
                  <div
                    onClick={(e) => {
                      if (!isFocusOnHtml) e.preventDefault();
                    }}
                    onPointerEnter={(e) => {
                      if (isFocusOnHtml) setIsPointerOnHtml(true);
                    }}
                    onPointerLeave={(e) => {
                      if (isFocusOnHtml) setIsPointerOnHtml(false);
                    }}
                  >
                    <iframe
                      id="iframe"
                      src="https://niltonsf.dev/static?remove=true"
                      title="myStaticWebsite"
                      style={{
                        width: 1200,
                      }}
                    />
                  </div>
                </Html>

                <mesh>
                  <planeGeometry args={[1.535, 0.69]} />
                  <meshPhysicalMaterial
                    blending={THREE.NoBlending}
                    opacity={0}
                    color={"black"}
                    side={THREE.DoubleSide}
                  />
                </mesh>
              </group>
            </primitive>
            <mesh geometry={geometry}>
              <meshBasicMaterial map={bakedTexture} />
            </mesh>
          </>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.room.geometry}
            material={nodes.room.material}
          />
        </group>
      </EffectComposer>
    </>
  );
}

useGLTF.preload("/Room.glb");

import { RefObject } from "react";
import { Vector3 } from "@react-three/fiber";
import { useContext } from "react";
import { StateContext } from "../../context/CameraContext";
import { gsap, Linear } from "gsap";
import MoveSound from "/Sounds/CameraMove.wav";

//Camera Animate
export const CameraAnimate = (
  CameraRef: RefObject<any>,
  EndPos: { x: number; y: number; z: number },
  EndRot: { x: number; y: number; z: number }
) => {
  //Audio
  const audio = new Audio(MoveSound);
  //Create_Gsap_TimeLine_Animation
  const cameraAnimation = gsap.timeline();
  cameraAnimation
    .to(CameraRef.current.position, {
      duration: 2.5,
      x: EndPos.x,
      y: EndPos.y,
      z: EndPos.z,
      ease: "power4.inOut",
      onStart: () => {
        setTimeout(() => {
          audio.play();
        }, 600);
      },
      onInterrupt: () => {
        audio.pause();
        audio.currentTime = 0;
      },
    })
    .to(
      CameraRef.current.rotation,
      {
        duration: 2.5,
        y: EndRot.y,
        ease: "power4.inOut",
      },
      0
    );

  //Play
  cameraAnimation.play();
};

//Animate to the Full Screen Mac
export const FullScreenAnimation = () => {};

import { RefObject } from "react";
import { gsap, Linear } from "gsap";

export const CameraAnimate = (
  CameraRef: RefObject<any>,
  EndPos: { x: number; y: number; z: number },
  EndRot: { x: number; y: number; z: number }
) => {
  //Create_Gsap_TimeLine_Animation
  const cameraAnimation = gsap.timeline();
  cameraAnimation
    .to(CameraRef.current.position, {
      duration: 2.5,
      x: EndPos.x,
      y: EndPos.y,
      z: EndPos.z,
      ease: "power4.inOut",
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

  cameraAnimation.play();
};

//Animate to the Full Screen Mac
export const FullScreenAnimation = () => {};

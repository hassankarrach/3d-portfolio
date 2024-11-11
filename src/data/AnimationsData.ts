interface vec3 {
  x: number;
  y: number;
  z: number;
}
export interface AnimationData {
  id: number;
  Title: string;
  StartPos?: vec3;
  StartPosMob?: vec3;
  CameraLookAt: vec3;
  CameraLookAtMobile: vec3;
  EndPosition: vec3;
  EndPositionMob: vec3;
}

export const AnimationsData: AnimationData[] = [
  {
    id: 0,
    Title: "StartIntro",
    StartPos: { x: 0, y: 0, z: 5.9 },
    StartPosMob: { x: 0, y: 0, z: 0 },
    EndPosition: { x: 0, y: 0, z: 4.5 },
    EndPositionMob: { x: 0, y: -0.2, z: 2 },
    CameraLookAt: { x: 0, y: 0, z: 0 },
    CameraLookAtMobile: { x: 100, y: 100, z: 100 },
  },
  {
    id: 1,
    Title: "ToAboutMeAnimation",
    EndPosition: {
      x: -2.4,
      y: 0,
      z: 1.3,
    },
    EndPositionMob: {
      x: -1.8,
      y: -0.1,
      z: 0.9,
    },
    CameraLookAt: { x: 0, y: -Math.PI / 3.5 + Math.PI / 16, z: 0 },
    CameraLookAtMobile: { x: 0, y: -Math.PI / 4 + Math.PI / 16, z: 0 },
  },
  {
    id: 2,
    Title: "ToSkillsAnimation",
    EndPosition: { x: 0.02, y: 0.2, z: 1.9 },
    EndPositionMob: { x: 0.03, y: 0.2, z: 0.8 },
    CameraLookAt: { x: 0, y: 0, z: 0 },
    CameraLookAtMobile: { x: 0, y: 0, z: 0 },
  },
  {
    id: 3,
    Title: "ToProjectAnimation",
    EndPosition: { x: 2.11, y: 0, z: 1.2 },
    EndPositionMob: { x: 2.03, y: 0.03, z: 0.8 },
    CameraLookAt: { x: 0, y: Math.PI / 8 + Math.PI / 18, z: 0 },
    CameraLookAtMobile: { x: 0, y: Math.PI / 7 + Math.PI / 12, z: 0 },
  },
  {
    id: 4,
    Title: "MacFocus",
    EndPosition: { x: -0.04, y: -0.3, z: 1.6 },
    EndPositionMob: { x: -0.04, y: -0.3, z: 1 },
    CameraLookAt: { x: 0, y: 0, z: 0 },
    CameraLookAtMobile: { x: 0, y: 0, z: 0 },
  },
];

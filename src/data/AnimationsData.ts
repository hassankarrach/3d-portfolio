interface vec3 {
  x: number;
  y: number;
  z: number;
}
export interface AnimationData {
  id: number;
  Title: string;
  StartPos: vec3;
  EndPosition: vec3;
  CameraLookAt: vec3;
}

export const AnimationsData: AnimationData[] = [
  {
    id: 0,
    Title: "StartIntro",
    StartPos: { x: 0, y: 0, z: 5.9 },
    EndPosition: { x: 0, y: 0, z: 3.5 },
    CameraLookAt: { x: 0, y: 0, z: 0 },
  },
  {
    id: 1,
    Title: "ToAboutMeAnimation",
    StartPos: {
      x: 0,
      y: 0,
      z: 0,
    },
    EndPosition: {
      x: -2,
      y: 0,
      z: 1.9,
    },
    CameraLookAt: { x: 0, y: -Math.PI / 4 + Math.PI / 16, z: 0 },
  },
  {
    id: 2,
    Title: "ToSkillsAnimation",
    StartPos: {
      x: 0,
      y: 0,
      z: 0,
    },
    EndPosition: { x: 0.04, y: 0.2, z: 1.5 },
    CameraLookAt: { x: 0, y: 0, z: 0 },
  },
  {
    id: 3,
    Title: "ToProjectAnimation",
    StartPos: {
      x: 0,
      y: 0,
      z: 0,
    },
    EndPosition: { x: 2.1, y: -0.02, z: 1.25 },
    CameraLookAt: { x: 0, y: Math.PI / 7 + Math.PI / 12, z: 0 },
  },
  {
    id: 4,
    Title: "MacFocus",
    StartPos: {
      x: 0,
      y: 0,
      z: 0,
    },
    EndPosition: { x: -0.04, y: -0.3, z: 1 },
    CameraLookAt: { x: 0, y: 0, z: 0 },
  },
];

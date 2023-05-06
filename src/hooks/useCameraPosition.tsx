import { useThree, Vector3 } from "@react-three/fiber";

export function useCameraPosition(): Vector3 {
  const { camera } = useThree();
  return camera.position;
}

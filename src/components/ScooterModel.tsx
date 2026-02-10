import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface ScooterModelProps {
  isMobile?: boolean;
}

export default function ScooterModel({ isMobile = false }: ScooterModelProps) {
  const { scene } = useGLTF('/assets/electric_scooter.glb');
  const modelRef = useRef<THREE.Group>(null);

  // Ajustar configurações baseado no dispositivo
  const scale = isMobile ? 0.08 : 0.1;
  const yPosition = isMobile ? -0.5 : 0;
  const rotationSpeed = isMobile ? 0.002 : 0.001;

  // Animação de rotação suave e flutuação
  useFrame(() => {
    if (modelRef.current) {
      // Rotação dinâmica baseada no hover
      const currentSpeed = rotationSpeed;
      modelRef.current.rotation.y += currentSpeed;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={scale} 
      position={[0, yPosition, 0]}
    />
  );
}

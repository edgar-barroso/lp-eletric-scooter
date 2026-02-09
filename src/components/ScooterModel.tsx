import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface ScooterModelProps {
  isMobile?: boolean;
}

export default function ScooterModel({ isMobile = false }: ScooterModelProps) {
  const { scene } = useGLTF('/src/assets/electric_scooter.glb');
  const modelRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Ajustar configurações baseado no dispositivo
  const scale = isMobile ? 0.08 : 0.1;
  const yPosition = isMobile ? -0.5 : 0;
  const rotationSpeed = isMobile ? 0.002 : 0.001;
  const hoverRotationSpeed = isMobile ? 0.004 : 0.003;
  const floatAmplitude = isMobile ? 0.05 : 0.1;

  // Animação de rotação suave e flutuação
  useFrame((state) => {
    if (modelRef.current) {
      // Rotação constante
      modelRef.current.rotation.y += rotationSpeed;

    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={scale} 
      position={[0, yPosition, 0]}
      onPointerOver={() => !isMobile && setHovered(true)}
      onPointerOut={() => !isMobile && setHovered(false)}
    />
  );
}

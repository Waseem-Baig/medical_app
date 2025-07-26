
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function DetailedStethoscope({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth mouse following
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mousePosition.x * 0.8, 0.02);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mousePosition.y * 0.4, 0.02);
      
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      
      // Subtle breathing effect when hovered
      if (hovered) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
        meshRef.current.scale.setScalar(scale);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main Chest Piece (Diaphragm) */}
      <mesh position={[0, 2, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#1e40af" : "#2563eb"} 
          metalness={0.8} 
          roughness={0.1}
          emissive={hovered ? "#0f1419" : "#000000"}
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Inner Diaphragm */}
      <mesh position={[0, 2.08, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.02, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#374151" : "#4b5563"} 
          metalness={0.9} 
          roughness={0.05}
        />
      </mesh>

      {/* Bell (smaller side) */}
      <mesh position={[0, 1.85, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.08, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#1e3a8a" : "#1e40af"} 
          metalness={0.7} 
          roughness={0.2}
        />
      </mesh>

      {/* Main Tubing - Left Side */}
      <mesh position={[-0.8, 1.2, 0]} rotation={[0, 0, Math.PI / 6]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 1.8, 16]} />
        <meshStandardMaterial 
          color={hovered ? "#1f2937" : "#374151"}
          roughness={0.3}
        />
      </mesh>

      {/* Main Tubing - Right Side */}
      <mesh position={[0.8, 1.2, 0]} rotation={[0, 0, -Math.PI / 6]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 1.8, 16]} />
        <meshStandardMaterial 
          color={hovered ? "#1f2937" : "#374151"}
          roughness={0.3}
        />
      </mesh>

      {/* Binaurals (metal tubes to ears) - Left */}
      <mesh position={[-1.6, 0.4, 0]} rotation={[0, 0, -Math.PI / 8]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
        <meshStandardMaterial 
          color={hovered ? "#6b7280" : "#9ca3af"}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Binaurals (metal tubes to ears) - Right */}
      <mesh position={[1.6, 0.4, 0]} rotation={[0, 0, Math.PI / 8]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
        <meshStandardMaterial 
          color={hovered ? "#6b7280" : "#9ca3af"}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Earpieces with detailed tips */}
      <group position={[-2.1, -0.2, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial 
            color={hovered ? "#4b5563" : "#6b7280"}
            emissive={hovered ? "#1e40af" : "#000000"}
            emissiveIntensity={hovered ? 0.15 : 0}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, 0, 0.1]} castShadow>
          <coneGeometry args={[0.08, 0.15, 8]} />
          <meshStandardMaterial 
            color="#2d3748"
            roughness={0.8}
          />
        </mesh>
      </group>
      
      <group position={[2.1, -0.2, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial 
            color={hovered ? "#4b5563" : "#6b7280"}
            emissive={hovered ? "#1e40af" : "#000000"}
            emissiveIntensity={hovered ? 0.15 : 0}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, 0, 0.1]} castShadow>
          <coneGeometry args={[0.08, 0.15, 8]} />
          <meshStandardMaterial 
            color="#2d3748"
            roughness={0.8}
          />
        </mesh>
      </group>

      {/* Connection joints */}
      <mesh position={[-1.4, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial 
          color="#4a5568"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[1.4, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial 
          color="#4a5568"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Tension springs on binaurals */}
      <mesh position={[-1.8, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
        <meshStandardMaterial 
          color="#a0aec0"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      <mesh position={[1.8, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
        <meshStandardMaterial 
          color="#a0aec0"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

const StethoscopeModel = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          autoRotate={false}
          enableRotate={true}
          maxDistance={10}
          minDistance={3}
        />
        
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.4} color="#f0f8ff" />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.5} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          color="#ffffff"
        />
        <pointLight position={[-5, -5, -3]} intensity={0.6} color="#3b82f6" />
        <pointLight position={[5, 5, 3]} intensity={0.4} color="#10b981" />
        <spotLight 
          position={[0, 8, 4]} 
          intensity={0.8} 
          color="#e0f2fe"
          angle={Math.PI / 6}
          penumbra={0.2}
          castShadow
        />
        
        {/* Environment */}
        <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f8fafc" transparent opacity={0.5} />
        </mesh>
        
        <DetailedStethoscope mousePosition={mousePosition} />
      </Canvas>
    </motion.div>
  );
};

export default StethoscopeModel;

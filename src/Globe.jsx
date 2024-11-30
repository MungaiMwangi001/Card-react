// src/Globe.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';

const Globe = () => {
  const mesh = useRef();

  // Rotate the globe
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.y = a;
  });

  // Load the texture (make sure to replace with your texture path)
  const texture = new TextureLoader().load('path/to/earth_texture.jpg');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: '100vh', width: '100vw' }}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1, 100, 100]} ref={mesh}>
          <meshStandardMaterial attach="material" map={texture} />
        </Sphere>
      </Canvas>
    </motion.div>
  );
};

export default Globe;

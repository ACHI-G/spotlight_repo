import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export function SpaceDust({ count }) {
    const mesh = useRef();
    const light = useRef();

    // Generate some random positions, speed factors and timings
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const time = THREE.MathUtils.randFloat(0, 100);
            const factor = THREE.MathUtils.randFloat(20, 120);
            const speed = THREE.MathUtils.randFloat(0.01, 0.015) / 20;
            const x = THREE.MathUtils.randFloat(-25, 25);
            const y = THREE.MathUtils.randFloat(-60, 10);
            const z = THREE.MathUtils.randFloat(-25, 25);

            // const time = THREE.MathUtils.randFloat(0, 100);
            // const factor = THREE.MathUtils.randFloat(20, 120);
            // const speed = THREE.MathUtils.randFloat(0.01, 0.015) / 2;
            // const x = THREE.MathUtils.randFloat(-50, 50);
            // const y = THREE.MathUtils.randFloat(-50, 50);
            // const z = THREE.MathUtils.randFloat(-50, 50);

            temp.push({ time, factor, speed, x, y, z });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        // Run through the randomized data to calculate some movement
        particles.forEach((particle, index) => {
            let { factor, speed, x, y, z } = particle;

            // Update the particle time
            const t = (particle.time += speed);

            // Update the particle position based on the time
            // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
            dummy.position.set(
                x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );

            // Derive an oscillating value which will be used
            // for the particle size and rotation
            const s = Math.cos(t);
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 10, s * 10, s * 10);
            dummy.updateMatrix();

            // And apply the matrix to the instanced item
            mesh.current.setMatrixAt(index, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <>
            {/* <directionalLight 
      ref={light} 
      position={[10,10,0]}
      intensity={30} 
      color="lightblue" 
      decay={0.1}
     /> */}

            {/*  <directionalLight 
      ref={light} 
      position={[10,10,0]}
      intensity={30} 
      color="lightblue" 
      decay={0.1}
     /> */}
            {/* <hemisphereLight ref={light}  intensity={100} color="#eaeaea" groundColor="blue" position={[0, 0, 0]}/> */}

            <instancedMesh ref={mesh} args={[null, null, count]}>
                <icosahedronGeometry args={[0.03, 0]} />
                <meshBasicMaterial color="white" envMapIntensity="1" />
            </instancedMesh>
        </>
    );
}

import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei';
import { lightTheme, darkTheme } from './components/theme';

const color = new THREE.Color();

export default function Models({ scroll, ...props }) 
{
    // Function to retrieve the theme from local storage
    const theme = () => {
        return window.localStorage.getItem('theme');
    };

    // Initialize color variables based on the theme
    var { colorImpulse, colorHovered, colorModel } = {
        colorHovered: theme() === 'light' ? lightTheme.colorHovered : darkTheme.colorHovered,
        colorModel: theme() === 'light' ? lightTheme.colorModel : darkTheme.colorModel
    };

    useEffect(() => {
		 // Update color variables when the theme changes
        (colorHovered = theme() === 'light' ? lightTheme.colorHovered : darkTheme.colorHovered),
            (colorModel = theme() === 'light' ? lightTheme.colorModel : darkTheme.colorModel);
    }, [theme]);

	// References and hooks
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/PortfolioModels12.glb');
    const { actions } = useAnimations(animations, group);
    const [hovered, set] = useState();
    const extras = { receiveShadow: false, castShadow: true, 'material-envMapIntensity': 1 };
    const cameraAction = 'CameraAction';
    const zoomLimit = { min: 0.5, max: 1.5 };

    useEffect(() => void (actions[cameraAction].play().paused = true), []);
    useEffect(() => {
		// Color change when hovered and cursor style
        if (hovered) group.current.getObjectByName(hovered).material.color.set(colorHovered);
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    useFrame((state) => {
        // Object Scroll (Camera Animation)
        actions[cameraAction].time = THREE.MathUtils.lerp(
            actions[cameraAction].time,
            actions[cameraAction].getClip().duration * scroll.current,
            0.05
        );

        // Hover color change
        group.current.children[0].children.forEach((child, index) => {
            child.material.color.lerp(
                color.set(hovered === child.name ? colorHovered : colorModel),
                hovered ? 0.1 : 0.05
            );

            // Floating of Objects
            const et = state.clock.elapsedTime;

            child.position.y = Math.sin((et + index * 2000) / 2) * 0.1;
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;

            child.rotation.x = Math.sin((et + index * 2000) / 3) / 100;
            child.rotation.y = Math.cos((et + index * 2000) / 2) / 100;
            child.rotation.z = Math.sin((et + index * 2000) / 3) / 100;
        });
    });

    return (
        <>
			{/* Pointer Propagation and Meshes from the glb file */}
            <group ref={group} {...props} dispose={null}>
                <group
                    onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
                    onPointerOut={(e) => (e.stopPropagation(), set(null))}
                    position={[-1, 4, 0]}
                    scale={[1, 1, 1]}>
                    {/* <mesh name="Watch" geometry={nodes.Watch.geometry} material={materials.Watch} {...extras} onClick={()=>window.modal_Watch.showModal()} /> */}
                    <mesh name="BUDABAMA" geometry={nodes.BUDABAMA.geometry} material={materials.RAW_BUDABAMA} {...extras} onClick={() => props.openModal.b2()} />
                    <mesh name="AT420" geometry={nodes.AT420.geometry} material={materials.RAW_AT420} {...extras} onClick={() => props.openModal.at()} />
                    <mesh name="Doggo" geometry={nodes.Doggo.geometry} material={materials.RAW_Doggo} {...extras} onClick={() => props.openModal.cosmo()} />
                    <mesh name="Misc" geometry={nodes.Misc.geometry} material={materials.RAW_Misc} {...extras} onClick={() => props.openModal.misc()} />
                    <mesh name="Floppy" geometry={nodes.Floppy.geometry} material={materials.RAW_Floppy} {...extras} onClick={() => props.openModal.floppy()} />
                    <mesh name="Bueste" geometry={nodes.Bueste.geometry} material={materials.RAW_Bueste} {...extras} onClick={() => props.openModal.about()} />
                </group>

                <group name="Camera">
                    <PerspectiveCamera
                        makeDefault
                        far={150}
                        near={0.1}
                        fov={75 /* 28 */}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />

                    <directionalLight
                        position={[1, 100, 10]}
                        intensity={30}
                        color="lightblue"
                        decay={0.1}
                    />
                </group>
            </group>
        </>
    );
}
useGLTF.preload('/PortfolioModels12.glb');

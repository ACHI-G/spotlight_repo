import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import MyEffects from './components/Effects/MyEffects.jsx';
import { SpaceDust } from './components/Effects/SpaceDust.jsx';

import Models from './Models.jsx';
import Overlay from './Overlay.jsx';

import Project_About from './Projects/Project_About.jsx';
import Project_AT from './Projects/Project_AT.jsx';
import Project_Cosmo from './Projects/Project_Cosmo.jsx';
import Project_Floppy from './Projects/Project_Floppy.jsx';
import Project_Misc from './Projects/Project_Misc.jsx';
import Project_B2 from './Projects/Project_B2.jsx';

export default function Experience() {
    // Check if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Reference for the overlay and scroll
    const overlay = useRef();
    const scroll = useRef(0);

    //state for each modal
    const [atOpen, setAtOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [b2Open, setB2Open] = useState(false);
    const [cosmoOpen, setCosmoOpen] = useState(false);
    const [miscOpen, setMiscOpen] = useState(false);
    const [floppyOpen, setFloppyOpen] = useState(false);

    // object with all open functions for each modal
    const openModal = {
        at: () => setAtOpen(true),
        about: () => setAboutOpen(true),
        b2: () => setB2Open(true),
        cosmo: () => setCosmoOpen(true),
        misc: () => setMiscOpen(true),
        floppy: () => setFloppyOpen(true)
    };

    // useEffect for handling touch events on mobile
    useEffect(() => {
        if (isMobile) {
            const handleTouchMove = (event) => {
                if (event.touches.length > 1) {
                    event.preventDefault(); // Prevent default touch behavior (including zoom)
                }
            };

            document.addEventListener('touchmove', handleTouchMove, { passive: false });

            return () => {
                document.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, []);

    return (
        <>
            {/* Three.js canvas for rendering 3D models */}
            <Canvas
                shadows
                eventSource={document.getElementById('root')}
                eventPrefix="client"
                linear
                dpr={[1, 2]}>

                {/* Render 3D models, envMap and SpaceDust according to device */}
                <Suspense fallback={false}>
                    {
                        <>
                            <mesh>
                                <Models scroll={scroll} openModal={openModal} />
                            </mesh>
                        </>
                    }
                    {<Environment preset="studio" blur={1} />}
                    {!isMobile && <MyEffects />}
                    <SpaceDust count={isMobile ? 500 : 1000} />
                </Suspense>
            </Canvas>

            {/* Overlay for additional UI elements */}
            <Overlay ref={overlay} scroll={scroll} />

            {/* Project components + their state */}
            <Suspense fallback={false}>
                <Project_About isOpen={aboutOpen} setIsOpen={setAboutOpen} />
                <Project_AT isOpen={atOpen} setIsOpen={setAtOpen} />
                <Project_Cosmo isOpen={cosmoOpen} setIsOpen={setCosmoOpen} />
                <Project_Floppy isOpen={floppyOpen} setIsOpen={setFloppyOpen} />
                <Project_Misc isOpen={miscOpen} setIsOpen={setMiscOpen} />
                <Project_B2 isOpen={b2Open} setIsOpen={setB2Open} />
            </Suspense>
        </>
    );
}

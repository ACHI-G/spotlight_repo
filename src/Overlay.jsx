import React, { useState, forwardRef } from 'react';

import LoadingScreen from './components/LoadingScreen.jsx';
import NavBar from './components/NavBar.jsx';

// Overlay component to display content over the 3D scene
const Overlay = forwardRef(({ scroll, nav }, ref) => {
    // State to control the starting state of the loading screen
    const [start, setStart] = useState(false);

    return (
        <>
            {/* Render the navigation bar component */}
            <NavBar ref={nav} />

            {/* Render the loading screen until the start state is true */}
            {start == false && <LoadingScreen started={start} onStarted={() => setStart(true)} />}

            {/* Intro texts / Scrolldistance */}
            <div>
                <div
                    ref={ref}
                    onScroll={(e) => {
                        scroll.current =
                            e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
                    }}
                    className="scroll">
                    <div style={{ height: '100%' }}>
                        <div className="dot">
                            <h1>about</h1>
                            Achim Joas Gafner: Industrial Designer FHNW (BA). Dark Arts Electrician
                            (EFZ). Wannabe WebDev. 🇨🇭
                        </div>
                    </div>
                    <div style={{ height: '100%' }}>
                        <div className="dot">
                            <h1>at420</h1>
                            4. Semester. Trend Product. 2020. <br />
                            Photoshop | Illustrator | Fusion <br />
                            (University of Cincinnati)
                        </div>
                    </div>
                    <div style={{ height: '100%' }}>
                        <div className="dot">
                            <h1>testudo</h1>
                            5. Semester. Protected. 2020/21. <br />
                            Photoshop | Illustrator | Marvelous Designer | Substance Painter |
                            Blender
                        </div>
                    </div>
                    <div style={{ height: '100%' }}>
                        <div className="dot">
                            <h1>redewendung</h1>
                            6. Semester. Bachelor Thesis. 2021. <br />
                            Photoshop | Illustrator | Blender | Unreal
                        </div>
                    </div>
                    <div style={{ height: '100%' }}>
                        <div className="dot">
                            <h1>misc</h1>
                            Collection. 2018-2kx. <br />
                            Photoshop | Illustrator | After Effects | Premiere Pro | Blender
                        </div>
                    </div>
                    <div style={{ height: '100%' }}>
                        <div className="dot">
                            <h1>fury road</h1>
                            <h2>
                                Budapest-Bamako Rally. 2022. <br />
                                3D Scan | Photoshop | Illustrator | Blender (Double Real Life XP)
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Overlay;

import { useProgress } from '@react-three/drei';
import '../style.css';
import React, { useEffect, useState, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useTranslation } from 'react-i18next';

import introAnimation from '/lotties/IntroAnimation2.json';
import Loader from '/lotties/Loader2.json';

// Defining the LoadingScreen component
export default function LoadingScreen({ started, onStarted }) {
    const { t } = useTranslation();
    const { progress } = useProgress();
    //   const [animationDuration, setAnimationDuration] = useState(0);
    const playerRef = useRef();
    var frame = 0;
    const radialAnim = useRef();
    const valueSpinner = progress;
    const [fadeOut, setFadeOut] = useState(false);

    // Handling the start button click event
    const handleStartClick = () => {
        setFadeOut(true); // Trigger the fade-out animation
        setTimeout(() => {
            onStarted(); // Call onStarted after the animation is complete
        }, 1000); // Adjusting timeout to match the transition duration
    };

    // useEffect hook for handling progress and animations
    useEffect(() => {
        const playerInstance = playerRef.current;
        if (frame < progress) {
            playerInstance?.play(); // Playing the intro animation based on progress
        }
        /* console.log(progress); */
        // Adjusting speed for the Lottie players when progress is complete
        if (progress >= 100) {
            playerRef.current?.setPlayerSpeed(20);
            radialAnim.current?.setPlayerSpeed(10);
        }
    }, [progress]);

    return (
        <main
            className={`loadingScreen ${started ? 'loadingScreen--started' : ''} ${
                fadeOut ? 'loadingScreen--fadeOut' : ''
            }`}
            onClick={(e) => {
                e.nativeEvent.stopImmediatePropagation();
            }}
            style={{ cursor: 'auto' }}>
            {/* Progress bar */}
            <div className="loadingScreen__progress"></div>

            {/* Animation and loader elements main Container */}
            <div
                style={{
                    display: 'grid',
                    placeItems: 'center',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                }}>

                {/* Intro animation */}
                <div className="absolute w-[1000px] md:w-screen 2xl:w-[80%]">
                    <Player
                        ref={playerRef}
                        autoplay={false}
                        keepLastFrame={true}
                        speed={2}
                        src={introAnimation}
                    />
                </div>
                
                {/* Gradient overlay */}
                <figure className="absolute w-full h-full" />

                {/* Loader radial animation */}
                <div className="absolute w-[1000px] md:w-screen 2xl:w-[80%]">
                    {/* <CustomLoader progress={valueSpinner}/> */}
                    <Player
                        ref={radialAnim}
                        src={Loader}
                        className="player"
                        loop={progress > 100}
                        autoplay={true}
                        speed={0}
                        direction={1}
                        style={{ height: '52%', width: '52%' }}
                    />
                </div>

                {/* Displaying progress percentage */}
                <div style={{ '--value': valueSpinner }}>
                    <div className="ml-2 mt-60">{Math.floor(valueSpinner)}%</div>
                </div>

                {/* Start button for the loading screen */}
                <main className="absolute loadingScreen__board">
                    {progress >= 100 && (
                        <button
                            id="portfolio entrance"
                            aria-label="Start Portfolio"
                            className="loadingScreen__button"
                            disabled={progress < 100 || fadeOut}
                            onClick={handleStartClick}>
                            <span className="loadingScreen__title">START</span>
                        </button>
                    )}
                </main>
            </div>
            
            {/* Displaying a welcome message */}
            <div className="w-44 absolute text-center text-[22px] transform -translate-y-32">
                {t('loadingScreen.welcome')}
            </div>
        </main>
    );
}

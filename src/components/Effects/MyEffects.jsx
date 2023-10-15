import React from 'react'
import { Bloom, EffectComposer, DepthOfField } from '@react-three/postprocessing'
// import { WaterPass } from './post/Waterpass'



export default function MyEffects() {

  return (
    <>
      
     
      <EffectComposer>
        <Bloom
            mipmapBlur
            intensity={.8}
            radius={0.9}
            luminanceThreshold={1} //limit at which something starts to glow...
            luminanceSmoothing={0.1}
            height={100} />
      
      {/* <DepthOfField
          focusDistance={0}
          focalLength={0.1}
          bokehScale={0.8}
          height={600}
        
          blur={true}
        /> */}
        
      
        </EffectComposer> 

       
      

        
    </>

  )
}


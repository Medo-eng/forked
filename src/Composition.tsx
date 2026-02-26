import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

// --- THE MASCOT ---
const Prism = ({scale}: {scale: number}) => (
  <div style={{
    width: 300, height: 300, background: 'linear-gradient(45deg, #00F5FF, #7000FF)',
    borderRadius: '30px', transform: `scale(${scale}) rotate(${scale * 20}deg)`,
    boxShadow: '0 0 80px rgba(0, 245, 255, 0.4)', border: '4px solid white',
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  }}>
    <div style={{width: '40%', height: '40%', border: '2px solid white', borderRadius: '50%'}} />
  </div>
);

export const MainVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // This counts from $0 to $145,000 over 10 minutes (18,000 frames)
  const savings = Math.floor(interpolate(frame, [0, 18000], [0, 145000]));
  const entrance = spring({ frame, fps, config: { stiffness: 100 } });

  return (
    <AbsoluteFill style={{ backgroundColor: '#020408', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3, background: 'radial-gradient(circle, #001a1a 0%, #020408 100%)' }} />
      
      <div style={{ padding: 80, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ fontSize: 30, color: '#00F5FF', letterSpacing: 4 }}>SYSTEM_ACTIVE // AGENT_MODE</div>
        
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Prism scale={entrance} />
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 40, color: '#666' }}>TOTAL_SAVINGS</div>
            <div style={{ fontSize: 180, fontWeight: 'bold', color: '#00FF9D' }}>
                ${savings.toLocaleString()}
            </div>
          </div>
        </div>

        {/* 10-Minute Progress Bar */}
        <div style={{ height: 10, background: '#111', width: '100%', borderRadius: 5 }}>
            <div style={{ height: '100%', background: '#00F5FF', width: `${(frame/18000)*100}%` }} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

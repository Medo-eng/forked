import { Composition } from 'remotion';
import { MainVideo } from './Composition';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="BusinessVideo"
        component={MainVideo}
        durationInFrames={18000} // 10 Minutes
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

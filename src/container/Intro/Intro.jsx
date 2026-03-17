import { Play, Pause } from "lucide-react";
import { meal } from "../../constants";
import "./Intro.css";
import { useRef, useState } from "react";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlay) => !prevPlay);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          onClick={handleVideo}
          className="app__video-overlay_circle flex__center"
        >
          {playVideo ? (
            <Pause color="#fff" size={30} />
          ) : (
            <Play color="#fff" size={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;

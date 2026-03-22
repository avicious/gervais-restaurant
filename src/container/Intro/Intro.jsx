import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

import styles from "./Intro.module.css";
import { meal } from "../../constants";

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
    <div className={styles.video}>
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className={`${styles.overlay} flex__center`}>
        <div onClick={handleVideo} className={`${styles.circle} flex__center`}>
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

import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";
import { useState, useRef } from "react";
import { meal } from "../../constants";

const Intro = () => {
  const videoRef = useRef();
  const [playVideo, setplayVideo] = useState();

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;

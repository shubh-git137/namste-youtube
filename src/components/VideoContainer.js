import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      const json = await response.json();
      setVideo(json.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap container">
      {video.map((item) => (
        <Link key={item.id} to={`/watch?v=${item.id}`}>
          <VideoCard  info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

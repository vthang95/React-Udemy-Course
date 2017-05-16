import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelected }) => {
  const videosList = videos.map(video => <VideoListItem key={video.etag} video={video} onVideoClick={onVideoSelected} />);
  return (
    <ul className='col-md-4 list-group'>
      {videosList}
    </ul>
  );
};

export default VideoList;

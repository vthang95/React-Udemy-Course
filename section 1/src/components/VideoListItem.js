import React from 'react';

const VideoListItem = ({ video, onVideoClick }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  return (
    <li className='list-group-item' onClick={() => onVideoClick(video)}>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imgUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{videoTitle}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

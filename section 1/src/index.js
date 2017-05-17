import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyBy2dyp4D9Hq9EXJn1uLsU6FRZRnveds5E';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('twenty one pilots');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 500);

    return (
      <div>
        <SearchBar onVideoSearch={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelected={selectedVideo => this.setState({ selectedVideo })}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './compontents/search_bar';
import VideoList from './compontents/video_list';
import VideoDetail from './compontents/video_detail';
// Failed to load https://googleads.g.doubleclick.net/pagead/id: Redirect from
// 'https://googleads.g.doubleclick.net/pagead/id' to 'data:text;charset=utf-8,'
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present
// on the requested resource. Origin 'https://www.youtube.com' is therefore not allowed access.

const API_KEY = 'AIzaSyCC4vZAYbPMxItoFNGVI1NZw5S-XcIO6uI';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));


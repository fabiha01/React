import axios from 'axios';

const KEY = 'AIzaSyCYPd7iyNasY06pRNxLdmGm6EG6Hq86IAg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});

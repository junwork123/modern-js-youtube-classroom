import { youtubeApiKey } from './config.js';
import RequestApi from '../core/RequestApi.js';

const YOUTUBE_API = Object.freeze({
  BASE_URL: 'https://www.googleapis.com/youtube/v3/search',
  PART: 'snippet',
  MAX_RESULTS: 12,
});
const searchVideo = async (keyword) => {
  const params = {
    key: youtubeApiKey,
    part: YOUTUBE_API.PART,
    type: 'video',
    maxResults: YOUTUBE_API.MAX_RESULTS,
    q: keyword,
  };
  return RequestApi.GET(YOUTUBE_API.BASE_URL, params);
};

export {
  searchVideo,
};

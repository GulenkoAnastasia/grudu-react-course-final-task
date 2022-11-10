import axios from 'axios';
import { TweetInfo} from '../utils/types';

const SERVER_API = 'http://localhost:3001';

export const getTweets = async (): Promise<TweetInfo[]>  => {
  try {
    const tweetsList = await axios.get(`${SERVER_API}/tweets`);
    return tweetsList.data;
  } catch (err) {
    throw new Error('Unknown error');
  }
};

export const createTweet = async (data: {text: string, author_id: string}): Promise<void> => {
  try {
    await axios.post(`${SERVER_API}/tweets`, data);
  } catch (err) {
    throw new Error('Can\'t create a tweet');
  }
};
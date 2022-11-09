import axios from 'axios';
import { TweetInfo, UserData } from '../utils/types';

export const getUserbyId = async (id: string): Promise<Record<string, string>> => {
  try {
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    return response.data;
  } catch (err) {
    throw new Error('User doesn\'t exist');
  }
};

export const createUser = async (data: UserData): Promise<{status: number, message: string}> => {
  try {
    await getUserbyId(data.username);
      return {
        status: 200,
        message: "User already exists"
    };
  } catch (err) {
    try {
      const response = await axios.post('http://localhost:3001/users', { 
        id: data.username.toLowerCase(), 
        name: data.fullname, 
        email: data.email, 
        password: data.password
      });
      return {
        status: response.status,
        message: response.statusText
      };
    } catch (err) {
      throw new Error('Can\'t create a user');
    }
  }
};

export const getTweets = async (): Promise<TweetInfo[]>  => {
  try {
    const tweetsList = await axios.get(`http://localhost:3001/tweets`);
    return tweetsList.data;
  } catch (err) {
    throw new Error('Unknown error');
  }
};

export const createTweet = async (data: {text: string, author_id: string}): Promise<{status: number}> => {
  try {
    const response = await axios.post('http://localhost:3001/tweets', data);
    return {
      status: response.status
    };
  } catch (err) {
    throw new Error('Can\'t create a tweet');
  }
};
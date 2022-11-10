import axios from "axios";
import { UserData } from "../utils/types";

const SERVER_API = 'http://localhost:3001';

export const getUserbyId = async (id: string): Promise<{
  id: string,
  name: string,
  email: string,
  password: string
}> => {
  try {
    const response = await axios.get(`${SERVER_API}/users/${id}`);
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
      const response = await axios.post(`${SERVER_API}/users`, { 
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
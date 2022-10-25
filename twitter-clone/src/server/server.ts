import axios from 'axios';

export const getUsers = async (): Promise<Array<Record<string, string>>> => {
  try {
    const users = await axios.get('http://localhost:3001/users');
    return users.data;
  } catch (error) {
    throw new Error('Can\'t get users');
  }
};

export const createUser = async (data: Record<string, string>): Promise<string | undefined> => {
  const users = await getUsers();
  const hasUser = users.find((user) => user.Username === data.Username);
  if (!hasUser) {
    try {
      const response = await axios.post('http://localhost:3001/users', data);
      return response.statusText;
    } catch (error) {
      throw new Error('Can\'t create a user');
    }
  }
  return 'This username is already exist';
};

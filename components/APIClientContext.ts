import { createContext } from 'react';
import APIClient from '../components/api';

export const apiClient = new APIClient();
const APIClientContext = createContext<APIClient>(apiClient);

export default APIClientContext;

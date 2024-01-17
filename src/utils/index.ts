import * as dotenv from 'dotenv';
dotenv.config();
export const BASE_URL: string = "https://api.blockcypher.com/v1/bcy/test";
export const API_TOKEN: string = process.env.API_TOKEN || '';
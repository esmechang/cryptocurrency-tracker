import { API_KEY } from '../secret';

export const apiBaseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

export const headers = {'X-CMC_PRO_API_KEY': API_KEY}

export const params = {start: '1', limit: '10', convert: 'USD'}
export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const IS_MOCK_API_ENABLED =
  process.env.MOCK_API && process.env.MOCK_API === 'true';

export const API_NEXT_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const API_RMA_URL =
  process.env.API_RMA_URL || 'https://vmcontainer-ny.rmaassurance.com';

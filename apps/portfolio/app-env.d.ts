import { DefaultSession } from 'next-auth';

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken?: accessToken;
      error?: string;
    } & DefaultSession['user'];
  }
}

export interface ProcessEnv {
  [key: string]: string | undefined;
}

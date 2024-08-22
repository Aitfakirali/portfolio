/* eslint-disable no-console */
import { logger } from '@portfolio/next-logger';
import { signOut } from 'next-auth/react';
export class ResponseError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = 'ResponseError';
    Object.setPrototypeOf(this, ResponseError.prototype);
  }
}

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type Schema<TData> = {
  parse: (data: unknown) => TData;
};

export type FetcherOptions = {
  token?: string;
  responseType?: 'raw' | 'json' | 'text';
  acceptableStatus?: number[];
};

type FetcherConfig<Schema> = {
  readonly method: HTTPMethod;
  readonly schema?: Schema;
  readonly body?: object;
  readonly config?: FetcherOptions;
};

export async function fetcher<TData>(
  path: string,
  { method, body, config, schema }: FetcherConfig<Schema<TData>>,
) {
  const headers: any = {
    'Content-Type': 'application/json',
  };

  if (config?.token) {
    headers['Authorization'] = `Bearer ${config.token}`;
  }

  try {
    const fetchStartTime = performance.now();
    const response = await fetch(path, {
      headers,
      ...config,
      method,
      ...(body && { body: JSON.stringify(body) }),
    });
    const fetchEndTime = performance.now();

    logger.info({
      type: 'fetch',
      endpoint: path,
      headers,
      method,
      body: JSON.stringify(body),
      duration: fetchEndTime - fetchStartTime,
      status: response.ok,
    });

    if (
      !response.ok &&
      config?.acceptableStatus &&
      !config?.acceptableStatus.includes(response.status)
    ) {
      throw new ResponseError(response.statusText, response.status);
    }

    if (response.status === 401 && typeof window !== 'undefined') {
      // Unauthorized
      await signOut();
      return;
    }

    if (config?.responseType === 'raw') {
      return response;
    } else if (config?.responseType === 'text') {
      return await response.text();
    } else {
      // json is the default
      const data = await response.json();

      if (schema) {
        return schema.parse(data);
      }

      return data;
    }
  } catch (e: any) {
    console.error(`Failed at fetching ${path}: ${e.message}`);
    return Promise.reject(e);
  }
}

export function createFetcher(apiUrl: string, options?: FetcherOptions) {
  return async <TData>(path: string, config: FetcherConfig<Schema<TData>>) => {
    return fetcher(apiUrl + path, {
      ...config,
      config: { ...(options || {}), ...(config?.config || {}) },
    });
  };
}
